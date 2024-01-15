import Image from 'next/image';
import { ReactElement, SVGProps } from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  icon1?: ReactElement;
  icon2: ReactElement;
  className?: string;
  link?: string;
}
interface Icon1Props {
  src: string;
  height: number;
  width: number;
  blurWidth: number;
  blurHeight: number;
}

const BaseCard = ({
  title,
  description,
  icon1,
  icon2,
  className,
  link,
}: CardProps) => {
  return (
    <Link
      href={link ? link : '/'}
      className={`  try1 {exo_2.variable} font-sans bg-white text-[#323C32] hover:bg-primary-brighter hover:!text-white shadow-xl  md:shadow-lg px-4  py-6 rounded-sm max-w-72 2xl:w-96 2xl:max-w-[96rem] max-sm:h-[12rem] ${className} `}
    >
      <div className="flex justify-between">
        {icon1 ? icon1 : <div />}
        {icon2}
      </div>
      <h2 className="text-xl font-[500] mt-3">{title}</h2>
      <p className=" font-[400]">{description}</p>
    </Link>
  );
};
export default BaseCard;
