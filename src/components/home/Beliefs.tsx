import Image from 'next/image';
import BeliefsImage from '@/assets/image-beliefs.png';

const Beliefs = () => {
  return (
    <section className=" w-full bg-white ">
      <div className="bg-[#F8F9F7] md:flex md:justify-center md:items-center md:mx-16 2xl:mx-48 rounded-lg pt-10 md:pt-0 ">
        <div className=" w-full md:w-5/12 px-6 py-4 md:py-0 md:mt-0 md:text-left ">
          <h1
            className={`  font-sans text-[1.5rem] leading-[2.5rem] text-left xl:text-[2rem] xl:leading-[3.75rem] font-[500] md:py-12 md:pl-4 text-[#323C32] mb-4 2xl:pl-8 italic `}
          >
            Acreditamos que, <br /> através da colaboração, <br /> podemos criar
            soluções mais
            <span className="font-semibold  ">
              <br /> inovadoras e eficazes.
            </span>
          </h1>
        </div>
        <div className="w-full md:w-7/12 h-full flex justify-center md:justify-end">
          <Image
            src={BeliefsImage}
            alt="Beliefs Image"
            priority
            className="w-full h-[19rem] md:h-[24.5rem] xl:h-auto  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Beliefs;
