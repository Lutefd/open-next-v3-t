import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  link?: string;
  Click?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const PrimaryButton = ({ text, className, link, Click, type }: ButtonProps) => {
  return link ? (
    <Link
      href={link}
      className={`bg-primary shadow-md text-white font-sans font-semibold px-8 py-4 rounded-lg transition-all  hover:scale-105 active:scale-95 ${className}`}
    >
      {text}
    </Link>
  ) : (
    <button
      type={type ? type : 'button'}
      className={`bg-primary shadow-md text-white font-sans font-semibold px-8 py-4 rounded-lg transition-all  hover:scale-105 active:scale-95 ${className}`}
      onClick={Click}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
