import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './router';

export default function App() {
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}
