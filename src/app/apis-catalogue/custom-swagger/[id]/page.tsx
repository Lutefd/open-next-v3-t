import LoadingSpinner from '@/components/LoadingSpinner';
import RedocView from '@/components/myapps/apis-catalogue/Redoc';
import { Apis } from '@/types/apisCatalogue';

import { Metadata } from 'next';

import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Swagger',
	description: 'Swagger',
};

export default async function Page({ params }: { params: { id: string } }) {
	const fetcher = async () => {
		const resp = await fetch(
			`http://15.229.214.76:1337/api/apis/${params.id}`,
			{
				next: {
					revalidate: 5,
				},
			}
		).then((res) => {
			const response = res.json();
			return response;
		});
		return resp;
	};
	const rawResponse = (await fetcher()) as Apis;
	//@ts-expect-error typing deep inference error
	const response = rawResponse.data!.attributes.swagger;

	return (
		<main className="justify-center">
			<Suspense>
				<RedocView redoc={response} />
			</Suspense>
		</main>
	);
}
