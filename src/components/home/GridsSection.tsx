import Image from 'next/image';
import Info from '@/assets/icons/ic_info.svg';
import Arrow from '@/assets/icons/ArrowRight';
import ChevronRight from '@/assets/icons/chevron-right.svg';
import DocumentIc from '@/assets/icons/ic_document.svg';
import GridHero from '@/assets/grid-hero.png';

import PrimaryButton from '../PrimaryButton';
import { Apps } from '@/types/myapps';
import { Datum } from '@/types/apisCatalogue';
import { ApiCard } from './ApiCardGrid';
import GreenCard from './GreenCardGrid';
import { apis } from './apis';

const GridSection = async () => {
	const fetcher = async (start = 0): Promise<any> => {
		const response = await fetch(
			`http://15.229.214.76:1337/api/apis?pagination[limit]=134&pagination[start]=${start}`
		);
		const { data, meta } = await response.json();
		if (meta.pagination.total > start + 100) {
			const nextData = await fetcher(start + 100);
			return { data: [...data, ...nextData.data], meta: nextData.meta };
		}
		return { data, meta };
	};
	const appsFetcher = async () => {
		const resp = fetch(
			'http://alb-dx-go-backend-1319772537.sa-east-1.elb.amazonaws.com/api/v1/gtw/82aa7efd-5ce8-4840-83ec-60beb5e004c0/r/apps',
			{
				next: {
					revalidate: 18000,
				},
			}
		).then((res) => {
			const response = res.json();
			return response;
		});
		return resp;
	};
	const apisFromCatalogue = await fetcher();
	const highlightedApis = apisFromCatalogue.data.filter((api: Datum) => {
		return api.attributes.highlighted === true;
	});

	const appsFromCatalogue = await appsFetcher();
	const countApiOccurrences = (apps: Apps[], apisID: number): number => {
		let count = 0;
		apps.forEach((app) => {
			app.apis.forEach((api) => {
				if (api.id === apisID) {
					count++;
				}
			});
		});
		return count;
	};

	return (
		<section className="flex w-full flex-col items-center space-y-8 py-12 ">
			<h2
				className={`  text-2xl md:text-4xl font-[500] font-sans italic`}
			>
				APIs Disponíveis
			</h2>
			<div className="flex flex-col xl:flex-row gap-4">
				<div className=" md:row-span-2 hidden xl:flex flex-end ">
					<Image
						src={GridHero}
						alt="Grid Image"
						className=" h-auto"
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 px-4 xl:px-0 md:min-h-[594px] md:max-h-[594px] ">
					{highlightedApis.length >= 3
						? highlightedApis
								.slice(0, 3)
								.map((api: any) => (
									<ApiCard
										key={api.id}
										name={api.attributes.name}
										version={api.attributes.version}
										apps={countApiOccurrences(
											appsFromCatalogue,
											api.attributes.apisID
										).toString()}
										description={api.attributes.description}
										link={`/apis-catalogue/swagger/${api.attributes.revisionID}`}
									/>
								))
						: apis.map((api) => (
								<ApiCard
									key={api.name}
									name={api.name}
									version={api.version}
									apps={api.apps}
									description={api.description}
									link={api.link}
								/>
						  ))}
					<GreenCard icon={<Arrow />} />
				</div>
			</div>
			<div className="w-full flex justify-center ">
				<PrimaryButton
					text="Ver mais APIs"
					className="md:hidden px-20 mt-4 text-xl"
					link="/apis-catalogue"
				/>
			</div>
		</section>
	);
};

export default GridSection;
