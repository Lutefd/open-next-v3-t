'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface BreadcrumbsProps {
  title: string;
  override?: string;
  maxItems?: number;
}

const Breadcrumbs = ({ title, override, maxItems }: BreadcrumbsProps) => {
  const pathnames = usePathname()
    .split('/')
    .filter((x) => x);

  if (maxItems !== undefined && pathnames.length > maxItems) {
    pathnames.length = maxItems;
  }

  const isDirectChildOfHomePage = pathnames.length === 1;

  return (
    <div className={`  font-sans text-primary text-md`}>
      {isDirectChildOfHomePage ? (
        <>
          <span className="mx-2">
            <Link href="/">Página Inicial</Link>
            {' > '}
          </span>
          <span className="text-[#323C32]">{title}</span>
        </>
      ) : (
        pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const valueWithSpaces = value.replace(/-/g, ' ');

          return isLast ? (
            <span key={to} className="text-[#323C32]">
              {title}
            </span>
          ) : (
            <span key={to} className="mx-2">
              <Link href={to}>
                {override ? override : valueWithSpaces.toLocaleUpperCase()}
              </Link>
              {' > '}
            </span>
          );
        })
      )}
    </div>
  );
};

export default Breadcrumbs;
