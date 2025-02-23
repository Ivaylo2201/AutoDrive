import capitalize from '../../utils/capitalize';

type CarStatProps = {
  text: string;
} & React.PropsWithChildren;

export default function CarStat({ text, children }: CarStatProps) {
  return (
    <div className='flex flex-col items-center'>
      {children}
      <p>{capitalize(text)}</p>
    </div>
  );
}
