import Image from 'next/image';
import HeroImage from '@/assets/img-hero.png';

const Hero = () => {
  return (
    <section className="bg-[#F8F9F7] w-full md:flex md:items-center ">
      <div className="w-full md:w-3/5 h-full flex justify-center md:justify-start">
        <Image
          src={HeroImage}
          alt="Hero Image"
          priority
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-2/5 px-6 py-4 md:py-0 md:mt-0 md:text-left">
        <h1
          className={`font-sans text-3xl text-left  xl:text-[2.75rem] xl:leading-[3.75rem] font-light italic text-primary mb-4`}
        >
          Olá, este é o <br />
          <span className="font-[500] ">
            Portal do Desenvolvedor
          </span> <br /> do Sicredi Cooperativo.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
