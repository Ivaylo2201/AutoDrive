import { useForm } from 'react-hook-form';
import { Car } from '../../types/Car';
import useEditCar from '../../hooks/useEditCar';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { NumberInput, TextInput } from '@mantine/core';
import capitalize from '../../utils/capitalize';
import { EditSchema, schema } from '../../schemas/edit.schema';
import { useNavigate } from 'react-router-dom';

type EditCarFormProps = {
  car: Car;
};

export default function EditCarForm({ car }: EditCarFormProps) {
  const { handleSubmit, setValue, register, watch } = useForm<EditSchema>({
    defaultValues: {
      year: car.year,
      price: Number(car.price),
      torque: car.torque,
      mileage: car.mileage,
      horsepower: car.horsepower,
      seats: car.seats,
      doors: car.doors,
      description: car.description
    }
  });
  const { mutateAsync } = useEditCar(car.id);
  const navigate = useNavigate()

  const onSubmit = async (data: EditSchema) => {
    console.log(data);
    const result = schema.safeParse(data);

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    try {
      await mutateAsync(data);
      navigate(`/cars/${car.id}`)
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data[0].message);
      }
    }
  };

  return (
    <div className='min-h-screen flex flex-col gap-10 justify-center items-center'>
      <h1 className='text-3xl font-semibold'>
        Editing {capitalize(`${car.make.name} ${car.model.name}`)}
      </h1>
      <form className='grid grid-cols-2 gap-4'>
        <NumberInput
          label='Year'
          withAsterisk
          placeholder='2018'
          hideControls
          value={watch('year')}
          onChange={(value) => setValue('year', Number(value))}
        />
        <NumberInput
          label='Price'
          withAsterisk
          placeholder='$20000'
          prefix='$'
          thousandSeparator=','
          hideControls
          value={watch('price')}
          onChange={(value) => setValue('price', Number(value))}
        />
        <NumberInput
          label='Torque (Nm)'
          withAsterisk
          placeholder='250'
          hideControls
          value={watch('torque')}
          onChange={(value) => setValue('torque', Number(value))}
        />
        <NumberInput
          label='Mileage (Km)'
          withAsterisk
          placeholder='50,000'
          thousandSeparator=','
          hideControls
          value={watch('mileage')}
          onChange={(value) => setValue('mileage', Number(value))}
        />
        <NumberInput
          label='Horsepower'
          withAsterisk
          placeholder='100'
          hideControls
          value={watch('horsepower')}
          onChange={(value) => setValue('horsepower', Number(value))}
        />
        <NumberInput
          label='Seats'
          withAsterisk
          placeholder='5'
          hideControls
          value={watch('seats')}
          onChange={(value) => setValue('seats', Number(value))}
        />
        <NumberInput
          label='Doors'
          withAsterisk
          placeholder='5'
          hideControls
          value={watch('doors')}
          onChange={(value) => setValue('doors', Number(value))}
        />
        <TextInput
          label='Description'
          placeholder='A very good-looking car.'
          {...register('description')}
        />
      </form>
      <button
        className='bg-theme-red py-1 px-4 text-white rounded-full hover:cursor-pointer'
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </button>
    </div>
  );
}
