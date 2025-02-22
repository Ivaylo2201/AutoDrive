import { NumberInput, Select, TextInput } from '@mantine/core';
import useModels from '../../hooks/useModels';
import { useState } from 'react';
import useServerData from '../../hooks/useServerData';
import { Control, Controller, UseFormGetValues } from 'react-hook-form';
import { AddSchema } from '../MultiForm';
import formatResponse from '../../utils/formatResponse';

type GeneralInformationStepProps = {
  getValues: UseFormGetValues<AddSchema>;
  control: Control<AddSchema>;
};

export default function GeneralInformationStep({
  control,
  getValues
}: GeneralInformationStepProps) {
  const [selectedMake, setSelectedMake] = useState<string | null>(
    getValues('make') || null
  );
  const { data } = useServerData();
  const { data: models } = useModels(selectedMake);

  return (
    <div className='w-1/2'>
      <div className='grid grid-cols-2 grid-rows-5 gap-x-4 gap-y-2'>
        <Controller
          name='make'
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              withAsterisk
              label='Make'
              placeholder='Choose a make.'
              data={formatResponse({ array: data?.makes, field: 'name' })}
              onChange={(make) => {
                setSelectedMake(make);
                field.onChange(make);
              }}
              value={field.value}
            />
          )}
        />
        <Controller
          name='model'
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              withAsterisk
              label='Model'
              placeholder={
                selectedMake === null
                  ? 'Choose a make first.'
                  : 'Choose a model.'
              }
              data={formatResponse({ array: models, field: 'name' })}
              disabled={selectedMake === null}
              value={field.value}
            />
          )}
        />
        <Controller
          name='color'
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              withAsterisk
              label='Color'
              placeholder='Choose a color.'
              data={formatResponse({ array: data?.colors, field: 'name' })}
            />
          )}
        />
        <Controller
          name='transmission'
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              withAsterisk
              label='Transmission'
              placeholder='Choose a transmission.'
              data={formatResponse({ array: data?.transmissions, field: 'type' })}
            />
          )}
        />
        <Controller
          name='drivetrain'
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              withAsterisk
              label='Drivetrain'
              placeholder='Choose a drivetrain.'
              data={formatResponse({ array: data?.drivetrains, field: 'type', mode: 'uppercase' })}
            />
          )}
        />
        <Controller
          name='fuel'
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              withAsterisk
              label='Fuel'
              placeholder='Choose a fuel type.'
              data={formatResponse({ array: data?.fuels, field: 'type' })}
            />
          )}
        />
        <Controller
          name='year'
          control={control}
          render={({ field }) => (
            <NumberInput
              {...field}
              label='Year'
              withAsterisk
              placeholder='2018'
              hideControls
              onChange={(value) => field.onChange(Number(value))}
            />
          )}
        />
        <Controller
          name='price'
          control={control}
          render={({ field }) => (
            <NumberInput
              {...field}
              label='Price'
              withAsterisk
              placeholder='$20000'
              prefix='$'
              thousandSeparator=','
              hideControls
              onChange={(value) => field.onChange(Number(value))}
            />
          )}
        />
        <Controller
          name='torque'
          control={control}
          render={({ field }) => (
            <NumberInput
              {...field}
              label='Torque (Nm)'
              withAsterisk
              placeholder='250'
              hideControls
              onChange={(value) => field.onChange(Number(value))}
            />
          )}
        />

        <Controller
          name='mileage'
          control={control}
          render={({ field }) => (
            <NumberInput
              {...field}
              label='Mileage (Km)'
              withAsterisk
              placeholder='50,000'
              thousandSeparator=','
              hideControls
              onChange={(value) => field.onChange(Number(value))}
            />
          )}
        />

        <Controller
          name='horsepower'
          control={control}
          render={({ field }) => (
            <NumberInput
              {...field}
              label='Horsepower'
              withAsterisk
              placeholder='100'
              hideControls
              onChange={(value) => field.onChange(Number(value))}
            />
          )}
        />

        <Controller
          name='seats'
          control={control}
          render={({ field }) => (
            <NumberInput
              {...field}
              label='Seats'
              withAsterisk
              placeholder='5'
              hideControls
              onChange={(value) => field.onChange(Number(value))}
            />
          )}
        />

        <Controller
          name='doors'
          control={control}
          render={({ field }) => (
            <NumberInput
              {...field}
              label='Doors'
              withAsterisk
              placeholder='5'
              hideControls
              onChange={(value) => field.onChange(Number(value))}
            />
          )}
        />

        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              label='Description'
              placeholder='A very good-looking car.'
            />
          )}
        />
      </div>
    </div>
  );
}
