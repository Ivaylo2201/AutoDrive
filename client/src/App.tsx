import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MultiForm from './components/MultiForm';
import Router from './router';

export default function App() {
  return (
    <div className='p-40'>
      <MultiForm />
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        theme="dark"
        style={{ fontFamily: 'DM Sans, sans-serif' }} 
      />
    </div>
  );
}
