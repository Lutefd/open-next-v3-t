import Breadcrumbs from '@/components/Breadcrumbs';
import CategoriesDisplay from '@/components/myapps/apis-catalogue/CategoriesDisplay';
import { ApisCatalogue, ShallowAPI } from '@/types/apisCatalogue';
import { Apps } from '@/types/myapps';
import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Cátalogo de APIs',
	description: 'Catálogo de APIs',
};

export default async function Page() {
	const fetcher = async () => {
		const resp = fetch(
			'http://15.229.214.76:1337/api/apis-categories?populate[apis][populate]=*',
			{
				next: { revalidate: 0 },
			}
		).then((res) => {
			const response = res.json();
			return response;
		});
		return resp;
	};
	const appsFetcher = async () => {
		const resp = fetch(
			'http://alb-dx-go-backend-1319772537.sa-east-1.elb.amazonaws.com/api/v1/gtw/82aa7efd-5ce8-4840-83ec-60beb5e004c0/r/apps',
			{
				next: {
					revalidate: 0,
				},
			}
		).then((res) => {
			const response = res.json();
			return response;
		});
		return resp;
	};
	const apps = (await appsFetcher()) as Apps[];
	const resp = (await fetcher()) as ApisCatalogue;
	const apis = resp.data as ShallowAPI[];
	function filterAppsByExternalAPIs(
		apps: Apps[],
		externalApis: ShallowAPI[]
	): Apps[] {
		const externalApiIds = externalApis.flatMap(
			(api) =>
				api.attributes.apis.data?.map(
					(datum) => datum.attributes.apisID
				) ?? []
		);

		return apps.filter((app) =>
			app.apis.some((api) => externalApiIds.includes(api.id))
		);
	}
	const filteredApps = filterAppsByExternalAPIs(apps, apis);
	function countApiOccurrences(apps: Apps[], apisID: number): number {
		let count = 0;
		apps.forEach((app) => {
			app.apis.forEach((api) => {
				if (api.id === apisID) {
					count++;
				}
			});
		});
		return count;
	}
	function addAppCountToStrapiAPIs(
		apps: Apps[],
		externalApis: ShallowAPI[]
	): void {
		externalApis.forEach((externalApi) => {
			externalApi.attributes.apis.data?.forEach((datum) => {
				const count = countApiOccurrences(
					apps,
					datum.attributes.apisID
				);
				datum.attributes.appCount = count;
			});
		});
	}
	addAppCountToStrapiAPIs(filteredApps, apis);
	return (
		<main>
			<div className="md:px-24 xl:px-44 py-12">
				<Breadcrumbs title={'Catálogo de APIs'} />
				<CategoriesDisplay data={apis} />
			</div>
		</main>
	);
}
