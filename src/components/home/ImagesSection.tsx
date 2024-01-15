import Image, { StaticImageData } from 'next/image';
import Image1 from '@/assets/rounded1.png';
import Image2 from '@/assets/rounded2.png';
import Image3 from '@/assets/rounded3.png';

interface ImageCardProps {
  imageSrc: StaticImageData;
  description: string;
}
const ImageCard = ({ imageSrc, description }: ImageCardProps) => (
  <div className="flex flex-col items-center space-y-2">
    <div className="w-48 h-48 lg:w-72 lg:h-72 rounded-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={description}
        width={400}
        height={400}
        className="object-cover"
      />
    </div>
    <p className="text-center text-md lg:text-lg max-w-[30ch]">{description}</p>
  </div>
);

const ImageSection = () => {
  return (
    <section
      className={`  font-sans flex flex-col text-[#323C32] items-center space-y-8 pb-12`}
    >
      <h2
        className={`  font-sans text-2xl font-[500] md:text-4xl leading-[2.15rem] pb-16 italic`}
      >
        Benefícios de utilizar nossas APIs
      </h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 xl:space-x-16">
        <ImageCard
          imageSrc={Image1}
          description={
            'Foco em uma boa experiência de desenvolvimento para todo time'
          }
        />
        <ImageCard
          imageSrc={Image2}
          description={'Produção com a facilidade de um ambiente sandbox'}
        />
        <ImageCard
          imageSrc={Image3}
          description={'Padrão de segurança de conexão'}
        />
      </div>
    </section>
  );
};

export default ImageSection;
