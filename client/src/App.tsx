import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@mantine/carousel/styles.css';
import Router from './router';

export default function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose={3000} pauseOnHover={false} theme='dark' />
    </>
  );
}
