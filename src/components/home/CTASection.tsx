import Link from 'next/link';
import PrimaryButton from '../PrimaryButton';

const CTASection = () => {
  return (
    <section className="bg-[#D7E6C8] w-full xl:flex xl:items-center xl:justify-center xl:gap-8 text-center py-16">
      <h2
        className={`  font-sans italic text-2xl xl:flex items-center justify-center md:text-4xl mb-4 xl:mb-0 font-[500] hidden md:flex`}
      >
        Comece a explorar nossas APIs
      </h2>
      <h2
        className={`  font-sans italic text-2xl items-center justify-center md:text-4xl mb-4 xl:mb-0 font-[500] md:hidden xl:hidden`}
      >
        Conheça nossas APIs
      </h2>

      <div className="flex justify-center  ">
        <Link href="#">
          <PrimaryButton
            text="Cadastre-se"
            className="px-24 mt-4 md:px-10 md:mt-0 md:py-2 md:text-sm"
          />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
