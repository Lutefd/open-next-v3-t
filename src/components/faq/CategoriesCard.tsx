import Link from 'next/link';
import { ReactElement } from 'react';

interface CardProps {
  title: string;
  description?: string;
  icon: ReactElement;
  slug: string;
  className?: string;
  identifier: number;
}

const CategoriesCard = ({
  identifier,
  title,
  description,
  icon,
  slug,
  className,
}: CardProps) => {
  const truncatedDescription = description
    ? description.length > 90
      ? `${description.slice(0, 90)}...`
      : description
    : ' ';

  return (
    <Link
      key={identifier}
      href={{ pathname: `/faq/${slug}`, query: { id: identifier } }}
      className={`  font-sans bg-white shadow-xl md:shadow-lg px-4 py-6 rounded-sm max-w-72 md:w-96 2xl:max-w-[96rem] m-4 max-sm:h-[12rem] ${className} min-h-[10rem] max-h-[10rem]`}
      prefetch
    >
      <div className="flex justify-between mb-4 items-center">
        <h2 className="text-2xl text-primary font-[300] ">{title}</h2>
        <div>{icon}</div>
      </div>
      <p className="text-[#323C32] font-[300] pb-4">{truncatedDescription}</p>
    </Link>
  );
};

export default CategoriesCard;
