import Link from 'next/link';

interface ButtonProps {
  text: string;
  className?: string;
  link?: string;
  Click?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const SecondaryButton = ({
  text,
  className,
  link,
  Click,
  type,
}: ButtonProps) => {
  return link ? (
    <Link
      href={link}
      className={`border-primary border-[1px] bg-white shadow-md  font-sans font-semibold  px-8 py-4 rounded-lg text-primary transition-all  hover:scale-105 active:scale-95 ${className}`}
      prefetch
    >
      {text}
    </Link>
  ) : (
    <button
      type={type ? type : 'button'}
      className={`border-primary border-[1px] bg-white shadow-md  font-sans font-semibold  px-8 py-4 rounded-lg text-primary transition-all  hover:scale-105 active:scale-95 ${className}`}
      onClick={Click}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
