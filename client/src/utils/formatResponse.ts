import capitalize from './capitalize';
import toUpperCase from './toUpperCase';

type FormatResponseProps<T> = {
  array: T[] | undefined;
  field: keyof T;
  mode?: 'capitalize' | 'uppercase';
};

export default function formatResponse<T>({
  array = [],
  field,
  mode = 'capitalize'
}: FormatResponseProps<T>) {
  const formatFn = mode === 'capitalize' ? capitalize : toUpperCase;

  return array.map((obj) =>
    (obj[field] as string).split(' ').map(formatFn).join(' ')
  );
}
