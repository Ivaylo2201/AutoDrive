import { useState } from 'react';
import useCars from '../../hooks/useCars';
import CarCard from '../CarCard/CarCard';
import { Select } from '@mantine/core';
import { MagnifyingGlass } from '../../icons/MagnifyingGlass';
import { useForm } from 'react-hook-form';
import useServerData from '../../hooks/useServerData';
import capitalize from '../../utils/capitalize';
import { Link, useParams } from 'react-router-dom';

export type Filters = {
  make?: string;
  body?: string;
  color?: string;
};

export default function Market() {
  const params = useParams();
  const [filters, setFilters] = useState<Filters>(params);
  const { data: cars } = useCars(filters);
  const { data } = useServerData();

  const { handleSubmit, setValue } = useForm<Filters>({
    defaultValues: { make: params.make ? capitalize(params.make) : undefined }
  });

  const onSubmit = (data: Filters) => setFilters(data);

  return (
    <>
      <div className='bg-neutral-800 rounded-full inline-flex items-center gap-4 px-10 py-1'>
        <Select
          placeholder='Make'
          variant='unstyled'
          data={data?.makes.map((make) => capitalize(make.name)) || []}
          onChange={(value) =>
            setValue('make', value !== null ? value : undefined)
          }
          styles={{ input: { color: '#adb5bd' } }}
          value={params.make ? capitalize(params.make) : undefined}
        />
        <Select
          placeholder='Body'
          variant='unstyled'
          data={data?.bodies.map((body) => capitalize(body.type)) || []}
          onChange={(value) =>
            setValue('body', value !== null ? value : undefined)
          }
          styles={{ input: { color: '#adb5bd' } }}
        />
        <Select
          placeholder='Color'
          variant='unstyled'
          data={data?.colors.map((color) => capitalize(color.name)) || []}
          onChange={(value) =>
            setValue('color', value !== null ? value : undefined)
          }
          styles={{ input: { color: '#adb5bd' } }}
        />
        <button
          onClick={handleSubmit(onSubmit)}
          className='bg-white rounded-full size-9 flex justify-center items-center cursor-pointer'
        >
          <MagnifyingGlass />
        </button>
      </div>
      <div className='min-h-[51rem] flex flex-col justify-center items-center gap-4'>
        <section className='flex flex-wrap justify-center gap-x-7 gap-y-5 p-5'>
          {cars?.length ? (
            cars.map((car) => (
              <CarCard
                key={car.id}
                {...car}
                link={
                  <Link
                    to={`/cars/${car.id}`}
                    className='bg-neutral-800 rounded-full py-1.5 px-8 text-white cursor-pointer hover:bg-neutral-700 transition-colors duration-300'
                  >
                    View
                  </Link>
                }
              />
            ))
          ) : (
            <p>No cars match your criteria.</p>
          )}
        </section>
      </div>
    </>
  );
}
