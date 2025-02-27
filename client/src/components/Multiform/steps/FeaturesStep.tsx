import {
  Control,
  Controller,
  useFieldArray,
  UseFormGetValues
} from 'react-hook-form';

import { Checkbox } from '@mantine/core';
import { AddSchema } from '../MultiForm';
import useServerData from '../../../hooks/useServerData';
import capitalize from '../../../utils/capitalize';

type FeaturesStepProps = {
  control: Control<AddSchema>;
  getValues: UseFormGetValues<AddSchema>;
};

export default function FeaturesStep({
  control,
  getValues
}: FeaturesStepProps) {
  const { data } = useServerData();

  const { append, remove } = useFieldArray({
    control: control,
    name: 'features'
  });

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4'>
      {data?.features.map((feature, i) => (
        <Controller
          key={i}
          name='features'
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              key={i}
              label={capitalize(feature.name)}
              value={feature.id}
              color='rgba(158, 11, 11, 1)'
              checked={getValues('features').some((f) => f.id === feature.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  append({ id: feature.id });
                } else {
                  const idx = getValues('features').findIndex(
                    (f) => f.id === feature.id
                  );
                  remove(idx);
                }
              }}
            />
          )}
        />
      ))}
    </div>
  );
}
