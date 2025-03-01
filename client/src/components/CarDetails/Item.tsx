export type ItemProps = {
  icon: React.ReactNode;
  text: string | number;
};

export default function Item({ icon, text }: ItemProps) {
  return (
    <li className='flex items-center gap-2'>
      {icon}
      <p>{text}</p>
    </li>
  );
}
