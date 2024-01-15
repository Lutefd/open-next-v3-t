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

const CarouselCard = ({
  title,
  description,
  icon1,
  icon2,
  className,
  link,
}: CardProps) => {
  return (
    <div
      className={`  try1 font-sans bg-white  my-4 mx-4 md:shadow-lg px-4 py-6  text-[#323C32] hover:bg-primary-brighter hover:!text-white shadow-xl rounded-sm max-w-72 md:w-96 2xl:max-w-[96rem] max-sm:h-[12rem] ${className} ${className}`}
    >
      <Link href={link ? link : '/'}>
        <div className="flex justify-between">
          {icon1 ? icon1 : <div />}
          {icon2}
        </div>
        <h2 className="text-xl font-[500] mt-3">{title}</h2>
        <p className=" font-[400]">{description}</p>
      </Link>
    </div>
  );
};
export default CarouselCard;
