import Link from 'next/link';
import type { ReactElement } from 'react';

interface GreenCardProps {
	icon: ReactElement;
}

export default function GreenCard({ icon }: GreenCardProps) {
	return (
		<Link
			href={'/apis-catalogue'}
			className={`  arrow-card bg-primary hover:bg-white text-white hover:text-primary hover:border-[1px] hover:border-primary-brighter p-4 rounded-md  justify-center items-center hidden md:flex md:flex-col`}
			prefetch
		>
			{icon}
			<h3 className=" font-semibold text-2xl">Ver mais APIs</h3>
		</Link>
	);
}
