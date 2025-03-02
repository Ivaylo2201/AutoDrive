import { PasswordInput, TextInput } from '@mantine/core';
import Page from '../../layouts/Page/Page';
import { useForm } from 'react-hook-form';
import Logo from '../Logo/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { http } from '../../utils/http';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { useAuthStore } from '../../stores/useAuthStore';
import { SignUpSchema } from '../../schemas/signUp.schema';

export default function SignUpForm() {
  const { register, handleSubmit } = useForm<SignUpSchema>();
  const { signIn } = useAuthStore();
  const navigate = useNavigate();

  const onSubmit = async (data: SignUpSchema) => {
    try {
      const res = await http.post('/auth/sign-up', data);
      localStorage.setItem('access', res.data.access);
      signIn();
      navigate('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data[0].message);
      }
    }
  };

  return (
    <Page>
      <section className='flex flex-col items-center gap-8'>
        <Logo />
        <form className='w-72 flex flex-col gap-8'>
          <div className='flex flex-col gap-2'>
            <TextInput
              label='Username'
              variant='filled'
              {...register('username')}
            />
            <PasswordInput
              label='Password'
              variant='filled'
              {...register('password')}
            />
            <TextInput
              label='Phone number'
              variant='filled'
              {...register('phoneNumber')}
            />
            <PasswordInput
              label='Password Confirmation'
              variant='filled'
              {...register('passwordConfirmation')}
            />
          </div>
          <p>
            Already have an account? Sign in{' '}
            <Link
              className='text-theme-red transition-colors duration-300'
              to='/auth/sign-in'
            >
              here
            </Link>
          </p>
          <button
            className='bg-black text-white py-1.5 w-full transition-colors duration-300 hover:bg-theme-red cursor-pointer'
            onClick={handleSubmit(onSubmit)}
          >
            Sign in
          </button>
        </form>
      </section>
    </Page>
  );
}
