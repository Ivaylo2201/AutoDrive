import { Stepper, Button, Group } from '@mantine/core';
import { useState } from 'react';
import z from 'zod';
import { FormProvider, useForm } from 'react-hook-form';

import GeneralInformationStep from './steps/GeneralInformationStep';

import FeaturesStep from './steps/FeaturesStep';
import { toast } from 'react-toastify';
import ImagesStep from './steps/ImagesStep';

import { useNavigate } from 'react-router-dom';
import { addSchema } from '../../schemas/add.schema';
import useAddCar from '../../hooks/useAddCar';
import { useAuthStore } from '../../stores/useAuthStore';

export type AddSchema = z.infer<typeof addSchema>;

export default function MultiForm() {
  const [active, setActive] = useState(0);
  const { mutateAsync: addCar } = useAddCar();
  const navigate = useNavigate();
  const { signOut } = useAuthStore();

  const proceed = () => setActive((c) => (c < 3 ? c + 1 : c));
  const goBack = () => setActive((c) => (c > 0 ? c - 1 : c));

  const methods = useForm<AddSchema>({
    defaultValues: { features: [], images: [] }
  });

  const onSubmit = async (data: AddSchema) => {
    console.log(data);
    const result = addSchema.safeParse(data);

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    try {
      await addCar(result.data);
      toast.success('Car added successfully.');
      navigate('/');
    } catch {
      signOut();
      navigate('/auth/sign-in');
    }
  };

  return (
    <div className='w-3/4 p-15'>
      <FormProvider {...methods}>
        <Stepper
          color='var(--theme-red)'
          active={active}
          onStepClick={setActive}
        >
          <Stepper.Step label='First step' description='General information'>
            <Group justify='center' my={65}>
              <GeneralInformationStep />
            </Group>
          </Stepper.Step>
          <Stepper.Step label='Second step' description='Features'>
            <Group justify='center' my={65}>
              <FeaturesStep />
            </Group>
          </Stepper.Step>
          <Stepper.Step label='Third step' description='Images'>
            <Group justify='center' my={65}>
              <ImagesStep />
            </Group>
          </Stepper.Step>
        </Stepper>
      </FormProvider>
      <Group justify='center' my={65}>
        <Button color='black' onClick={goBack} disabled={active === 0}>
          Back
        </Button>
        <Button
          color='var(--theme-red)'
          className='black'
          onClick={active === 2 ? methods.handleSubmit(onSubmit) : proceed}
        >
          {active === 2 ? 'Finish' : 'Next'}
        </Button>
      </Group>
    </div>
  );
}
