import LoadingSpinner from '@/components/LoadingSpinner';
import Beliefs from '@/components/home/Beliefs';
import CTASection from '@/components/home/CTASection';
import CarouselSection from '@/components/home/CarouselSection';
import CustomHomeFooter from '@/components/home/CustomHomeFooter';
import GridSection from '@/components/home/GridsSection';
import HelpSection from '@/components/home/HelpSection';
import Hero from '@/components/home/Hero';
import ImageSection from '@/components/home/ImagesSection';
import TextSections from '@/components/home/TextSections';
import { Metadata } from 'next';
import { Suspense } from 'react';

export default function Home() {
	return (
		<main className="">
			<Hero />
			<CarouselSection />
			<Beliefs />
			<TextSections />
			<ImageSection />
			<Suspense>
				<GridSection />
			</Suspense>
			{/* <HelpSection /> */}
			<CTASection />
			<CustomHomeFooter />
		</main>
	);
}

export const metadata: Metadata = {
	title: 'Página Inicial',
	description:
		'Página Inicial do portal de desenvolvedores da Sicredi cooperativas',
};
