'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ChevronRight from '@/assets/icons/ChevronRight';
import SearchIcon from '@/assets/icons/SearchIcon';
import BookIcon from '@/assets/icons/BookIcon';
import DevIcon from '@/assets/icons/DevIcon';

import BaseCard from '../BaseCard';
import 'swiper/css';
import 'swiper/css/navigation';
import CarouselCard from './CarouselCard';

interface CardProps {
  title: string;
  description: string;
  icon1: React.ReactElement;
  icon2: React.ReactElement;
  link?: string;
}

const CarouselSection = () => {
  const cards: CardProps[] = [
    {
      title: 'Nossas APIs',
      description:
        'Conheça todas as APIs que disponibilizamos em nosso catálogo.',
      icon1: <SearchIcon />,
      icon2: <ChevronRight />,
      link: '/apis-catalogue',
    },
    {
      title: 'Documentação',
      description:
        'Documentação completa e interativa com tudo o que você precisa saber sobre nossas APIs.',
      icon1: <BookIcon />,
      icon2: <ChevronRight />,
    },
    {
      title: 'Desenvolva',
      description:
        'Utilize nossas APIs e seus recursos para desenvolver sua aplicação.',
      icon1: <DevIcon />,
      icon2: <ChevronRight />,
    },
  ];
  return (
    <>
      <div className="hidden xl:block">
        <section className="w-full 2xl:px-48 py-12 ">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 md:gap-4 xl:gap-4 place-items-center">
            {cards.map((card) => (
              <BaseCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon1={card.icon1}
                icon2={card.icon2}
                link={card.link}
              />
            ))}
          </div>
        </section>
      </div>

      <section className="my-12 md:my-0 md:py-12 xl:hidden">
        <Swiper
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 120,
            },
          }}
          navigation
          className="flex gap-4"
        >
          <SwiperSlide>
            <CarouselCard
              title="Nossas APIs"
              description="Conheça todas as APIs que disponibilizamos em nosso catálogo."
              icon1={<SearchIcon />}
              icon2={<ChevronRight />}
              link="/apis-catalogue"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard
              title="Documentação"
              description="Documentação completa e interativa com tudo o que você precisa saber sobre nossas APIs."
              icon1={<BookIcon />}
              icon2={<ChevronRight />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard
              title="Desenvolva"
              description="Utilize nossas APIs e seus recursos para desenvolver sua aplicação."
              icon1={<DevIcon />}
              icon2={<ChevronRight />}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default CarouselSection;
