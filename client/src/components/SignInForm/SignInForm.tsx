import { PasswordInput, TextInput } from '@mantine/core';
import Page from '../../layouts/Page/Page';
import { useForm } from 'react-hook-form';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { http } from '../../utils/http';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

type SignInFormData = { username: string; password: string };

export default function SignInForm() {
  const { register, handleSubmit } = useForm<SignInFormData>();

  const onSubmit = async (data: SignInFormData) => {
    try {
      const res = await http.post('/auth/sign-in', data);
      localStorage.setItem('access', res.data.access);
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
              placeholder='Username'
              {...register('username')}
            />
            <PasswordInput
              label='Password'
              placeholder='Password'
              variant='filled'
              {...register('password')}
            />
          </div>
          <p>
            Don't have an account? Sign up{' '}
            <Link
              className='text-theme-red transition-colors duration-300'
              to='/auth/sign-up'
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
