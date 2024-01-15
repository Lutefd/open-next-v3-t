import Link from 'next/link';
import PrimaryButton from '../PrimaryButton';
import { Nunito } from 'next/font/google';
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

const HelpSection = () => {
  return (
    <section className="md:flex justify-center items-center md:gap-8 xl:px-16 md:pt-12 xl:gap-24 2xl:px-80 2xl:gap-48">
      <div className="bg-[#F8F9F7] md:h-[26rem] xl:h-[34rem] md:grid md:justify-center md:grid-rows-1 md:items-center text-center md:w-3/6 2xl:w-4/6 py-16 md:pt-0 md:pb-0 ">
        <h3
          className={`  font-sans text-3xl self-center md:text-3xl mb-4 md:mb-0`}
        >
          Precisa de <span className="text-primary">Ajuda</span>?
        </h3>
        <p
          className={`${nunito.variable} font-nunito text-md px-4  md:hidden mb-4`}
        >
          {' '}
          Encontrou problemas com relação à documentação ou uso das APIs? Crie
          sua conta no portal, ou faça o login e entre em contato com nosso
          suporte.
        </p>
        <div className="flex w-full justify-center">
          <Link href="#" className=" md:hidden ">
            <PrimaryButton
              text="Contatar Suporte"
              className="md:hidden py-3 px-24 text-[0.875rem !important]"
            />
          </Link>
        </div>
      </div>

      <div className="hidden md:flex md:flex-col p-4 text-center md:w-2/6 space-y-4 md:justify-center md:items-center 2xl:2/6 ">
        <div className="w-full flex justify-start">
          <p
            className={`${nunito.variable} font-nunito md:text-md md:max-w-[36ch] md:text-left`}
          >
            Encontrou problemas com relação à documentação ou uso das APIs? Crie
            sua conta no portal, ou faça o login e entre em contato com nosso
            suporte.
          </p>
        </div>
        <div className="flex w-full">
          <Link href="#">
            <PrimaryButton text="Contatar Suporte" className="px-16 md:py-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
