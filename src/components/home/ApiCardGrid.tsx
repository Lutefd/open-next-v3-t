import { Nunito } from 'next/font/google';
import Image from 'next/image';
import Info from '@/assets/icons/ic_info.svg';
import Arrow from '@/assets/icons/ArrowRight';
import ChevronRight from '@/assets/icons/chevron-right.svg';
import DocumentIc from '@/assets/icons/ic_document.svg';
import Link from 'next/link';
interface CardProps {
	version: string;
	apps: string;
	name: string;
	description: string;
	link: string;
}

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });
export function ApiCard({ version, apps, name, description, link }: CardProps) {
	return (
		<div className="bg-white p-6 rounded-md shadow-lg border-[1px] border-transparent hover:border-primary-brighter flex flex-col justify-between max-w-[23.25rem] h-auto max-h-[18rem] min-h-[18rem] ">
			<div className="flex justify-between items-start text-[#323c32]">
				<Image src={Info} alt={name} className="w-18 h-18" />
				<div className={`  font-sans flex flex-col gap-4 `}>
					<div className="flex gap-3">
						<div className="w-[0.125rem] h-auto bg-primary"></div>
						<div>
							<p className="text-sm text-primary-brighter">
								Version
							</p>
							<p>{version}</p>
						</div>
					</div>
					<div className="flex gap-3">
						<div className="w-[0.125rem] h-auto bg-primary"></div>

						<div>
							<p className="text-sm text-primary-brighter">
								Apps
							</p>
							<p>{apps}</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h3
					className={`  font-sans italic text-primary text-[1.75rem] leading-[1.5rem] mb-3`}
				>
					{name}
				</h3>
				<p className={`${nunito.variable} font-nunito text-[#323C32] `}>
					{description}
				</p>
			</div>
			<Link
				href={link}
				className={`${nunito.variable} font-nunito text-primary text-lg font-semibold flex items-center gap-1 py-2 hover:underline hover:underline-primary hover:underline-offset-4`}
			>
				{' '}
				<Image
					src={DocumentIc}
					alt="Arrow Right"
					height={24}
					width={24}
				/>
				Documentação
				<Image
					src={ChevronRight}
					alt="Arrow Right"
					height={32}
					width={32}
				/>
			</Link>
		</div>
	);
}
