import RedocView from '@/components/myapps/apis-catalogue/Redoc';

import { Metadata } from 'next';

import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Swagger',
	description: 'Swagger',
};

export default async function Page({ params }: { params: { id: string } }) {
	const fetcher = async () => {
		const resp = await fetch(
			`http://alb-dx-go-backend-1319772537.sa-east-1.elb.amazonaws.com/api/v1/gtw/82aa7efd-5ce8-4840-83ec-60beb5e004c0/r/revisions/${params.id}/swagger`,
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
	const rawResponse = await fetcher();
	const response = rawResponse;

	return (
		<main className="justify-center">
			<Suspense>
				<RedocView redoc={response} />
			</Suspense>
		</main>
	);
}
