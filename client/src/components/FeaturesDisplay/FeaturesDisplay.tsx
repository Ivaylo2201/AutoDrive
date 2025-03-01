import { Check } from '../../icons/Check';
import capitalize from '../../utils/capitalize';

type Feature = {
  name: string;
};

type FeaturesDisplayProps = {
  features: Feature[];
};

export default function FeaturesDisplay({ features }: FeaturesDisplayProps) {
  return (
    <ul className='border border-neutral-200 p-7 rounded-xl grid grid-cols-2 gap-2'>
      {features.map(({ name }, i) => (
        <li key={i} className='flex items-center gap-2'>
          <Check className='text-theme-red' />
          {capitalize(name)}
        </li>
      ))}
    </ul>
  );
}
