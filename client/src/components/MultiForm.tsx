import { Stepper, Button, Group } from '@mantine/core';
import { useState } from 'react';
import z from 'zod';
import { useForm } from 'react-hook-form';

import GeneralInformationStep from './steps/GeneralInformationStep';
import { addSchema } from '../schemas/add.schema';
import FeaturesStep from './steps/FeaturesStep';
import { toast } from 'react-toastify';

type MultiFormProps = {};

export type AddSchema = z.infer<typeof addSchema>;

export default function MultiForm({}: MultiFormProps) {
  const [active, setActive] = useState(0);

  const proceed = () => setActive((c) => (c < 3 ? c + 1 : c));
  const goBack = () => setActive((c) => (c > 0 ? c - 1 : c));

  const { handleSubmit, control, getValues } = useForm<AddSchema>({
    defaultValues: { features: [] }
  });

  const onSubmit = (data: AddSchema) => {
    const result = addSchema.safeParse(data);

    if (!result.success) {
      toast.error(result.error.errors[0].message);
    } else {
      console.log(data);
      toast.success('Car added successfully.');
    }
  };

  return (
    <>
      <Stepper
        color='rgba(158, 11, 11, 1)'
        active={active}
        onStepClick={setActive}
        allowNextStepsSelect={false}
      >
        <Stepper.Step label='First step' description='General information'>
          <GeneralInformationStep control={control} getValues={getValues} />
        </Stepper.Step>
        <Stepper.Step label='Second step' description='Features'>
          <FeaturesStep control={control} getValues={getValues} />
        </Stepper.Step>
        <Stepper.Step label='Third step' description='Images'></Stepper.Step>
        <Stepper.Completed>
          <Button
            variant='filled'
            color='rgba(158, 11, 11, 1)'
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </Stepper.Completed>
      </Stepper>
      <Group mt='xl' justify='center'>
        <Button color='rgba(158, 11, 11, 1)' onClick={goBack}>
          Back
        </Button>
        <Button color='rgba(158, 11, 11, 1)' onClick={proceed}>
          Next
        </Button>
      </Group>
    </>
  );
}
