import Link from 'next/link';
import type {FC} from 'react';

interface Props {
  href: string;
  text: string;
  disabled?: boolean;
}

export const ButtonLink: FC<Props> = ({href, text, disabled = false}) => (
  <Link
    href={disabled ? '#' : href}
    className={`block text-center w-full p-2 rounded-lg text-white ${
      disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
    }`}
  >
    {text}
  </Link>
);
