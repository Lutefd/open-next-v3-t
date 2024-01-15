import Link from 'next/link';
import { Nunito } from 'next/font/google';
import ChevronRight from '@/assets/icons/chevron-right.svg';
import Image from 'next/image';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });
const TextSections = () => {
  return (
    <section className="md:flex md:items-stretch px-6 lg:px-24 2xl:px-48 py-20 gap-0">
      <div className="md:w-1/2 md:py-6">
        <h2
          className={`  font-sans text-2xl lg:text-3xl xl:text-4xl font-light italic text-[#5A645A] leading-tight mb-6`}
        >
          Estamos colaborando para
          <br />
          a construção do
          <br />
          <span className="font-semibold">
            futuro das instuições financeiras.
          </span>
        </h2>
      </div>
      <div
        className={`${nunito.variable} font-nunito md:w-1/2 lg:pl-32 py-1 md:pt-5 lg:text-left lg:self-top`}
      >
        <p className="mb-2 text-base lg:text-lg xl:text-xl">
          Por isso criamos este portal, uma plataforma para todos os
          desenvolvedores de empresas parceiras do Sicredi, e que juntos desejam
          fazer parte desta grande construção.
        </p>
        <Link href="/" className=" text-primary flex items-center">
          Conheça mais sobre a Sicredi Cooperativas{' '}
          <Image src={ChevronRight} alt="Arrow Right" height={24} width={24} />
        </Link>
      </div>
    </section>
  );
};

export default TextSections;
