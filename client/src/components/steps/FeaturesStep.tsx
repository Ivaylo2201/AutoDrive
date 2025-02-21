import { Control, Controller, useFieldArray, UseFormGetValues } from 'react-hook-form';
import useServerData from '../../hooks/useServerData';
import { Checkbox } from '@mantine/core';
import { AddSchema } from '../MultiForm';

type FeaturesStepProps = {
  control: Control<AddSchema>;
  getValues: UseFormGetValues<AddSchema>;
};

export default function FeaturesStep({ control, getValues }: FeaturesStepProps) {
  const { data } = useServerData();

  const { append, remove } = useFieldArray({
    control: control,
    name: 'features'
  });

  return (
    <div className='flex justify-center items-center'>
      <div className='grid grid-cols-5 gap-4'>
        {data?.features.map((feature, i) => (
          <Controller
            key={i}
            name='features'
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                key={i}
                label={feature.name}
                value={feature.id}
                color='rgba(158, 11, 11, 1)'
                checked={getValues('features').some((f) => f.id === feature.id)}
                onChange={(e) => {
                  e.target.checked ? append({ id: feature.id }) : remove(i);
                }}
              />
            )}
          />
        ))}
      </div>
    </div>
  );
}
