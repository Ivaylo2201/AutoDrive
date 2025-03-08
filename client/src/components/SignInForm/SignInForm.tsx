import { PasswordInput, TextInput } from '@mantine/core';
import Page from '../../layouts/Page/Page';
import { useForm } from 'react-hook-form';
import Logo from '../Logo/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { http } from '../../utils/http';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { useAuthStore } from '../../stores/useAuthStore';
import { SignInSchema } from '../../schemas/signIn.schema';

export default function SignInForm() {
  const { register, handleSubmit } = useForm<SignInSchema>();
  const navigate = useNavigate();
  const { signIn } = useAuthStore();

  const onSubmit = async (data: SignInSchema) => {
    try {
      const res = await http.post<{ access: string; username: string }>(
        '/auth/sign-in',
        data
      );
      localStorage.setItem('access', res.data.access);
      signIn(res.data.username);
      navigate('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message);
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
