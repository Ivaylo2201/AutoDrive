import { Stepper, Button, Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import z from 'zod';
import { useForm } from 'react-hook-form';

import GeneralInformationStep from './steps/GeneralInformationStep';
import { addSchema } from '../schemas/add.schema';
import FeaturesStep from './steps/FeaturesStep';
import { toast } from 'react-toastify';
import ImagesStep from './steps/ImagesStep';

type MultiFormProps = {};

export type AddSchema = z.infer<typeof addSchema>;

export default function MultiForm({}: MultiFormProps) {
  const [active, setActive] = useState(0);
  const [stepperOrientation, setStepperOrientation] = useState<
    'vertical' | 'horizontal'
  >('horizontal');

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () =>
    setStepperOrientation(window.innerWidth < 650 ? 'vertical' : 'horizontal');
  const proceed = () => setActive((c) => (c < 3 ? c + 1 : c));
  const goBack = () => setActive((c) => (c > 0 ? c - 1 : c));

  const { handleSubmit, control, getValues } = useForm<AddSchema>({
    defaultValues: { features: [], images: [] }
  });

  const onSubmit = (data: AddSchema) => {
    const result = addSchema.safeParse(data);

    if (!result.success) {
      toast.error(result.error.errors[0].message);
    } else {
      const obj = {
        ...data,
        features: data.features.map((f) => f.id)
      };
      console.log(obj);
      toast.success('Car added successfully.');
    }
  };

  return (
    <div className='p-15'>
      <Stepper
        color='var(--theme-red)'
        active={active}
        onStepClick={setActive}
        orientation={stepperOrientation}
      >
        <Stepper.Step label='First step' description='General information'>
          <Group justify='center' my={65}>
            <GeneralInformationStep control={control} getValues={getValues} />
          </Group>
        </Stepper.Step>
        <Stepper.Step label='Second step' description='Features'>
          <Group justify='center' my={65}>
            <FeaturesStep control={control} getValues={getValues} />
          </Group>
        </Stepper.Step>
        <Stepper.Step label='Third step' description='Images'>
          <Group justify='center' my={65}>
            <ImagesStep control={control} />
          </Group>
        </Stepper.Step>
      </Stepper>
      <Group justify='center'>
        <Button color='black' onClick={goBack} disabled={active === 0}>
          Back
        </Button>
        <Button
          color='var(--theme-red)'
          className='black'
          onClick={active === 2 ? handleSubmit(onSubmit) : proceed}
        >
          {active === 2 ? 'Finish' : 'Next'}
        </Button>
      </Group>
    </div>
  );
}
