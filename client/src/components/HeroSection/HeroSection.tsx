import audiBackground from '../../assets/audibackground.jpg';
import { ArrowTopRight } from '../../icons/ArrowTopRight';
import Button from '../Button/Button';

export default function HeroSection() {
  return (
    <section
      style={{ backgroundImage: `url(${audiBackground})` }}
      className='h-[35rem] bg-red-500 bg-cover'
    >
      <div className='text-white font-bold mt-34 ml-28'>
        <p className='text-8xl'>Drive</p>
        <p className='text-8xl'>Your</p>
        <p className='text-8xl'>Dream.</p>
        <Button to='/' className='mt-4 text-2xl py-3 gap-2'>
          <p>Explore now</p>
          <ArrowTopRight />
        </Button>
      </div>
    </section>
  );
}
