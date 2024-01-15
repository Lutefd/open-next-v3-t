import LoadingSpinner from '@/components/LoadingSpinner';
import CategoriesSection from '@/components/faq/CategoriesSection';
import SearchSection from '@/components/faq/SearchSection';
import CustomHomeFooter from '@/components/home/CustomHomeFooter';
import { Metadata } from 'next';
import { Suspense } from 'react';
export const metadata: Metadata = {
	title: 'FAQ',
	description: 'FAQ',
};

export default async function FAQ() {
	const fetcher = async () => {
		const resp = fetch(
			'http://15.229.214.76:1337/api/categories?populate[qnas][populate]=*',
			{
				next: { revalidate: 5 },
			}
		).then((res) => {
			const response = res.json();
			return response;
		});
		return resp;
	};
	const response = await fetcher();
	return (
		<main>
			<Suspense
				fallback={
					<div className="grid place-items-center">
						<LoadingSpinner />
					</div>
				}
			>
				<SearchSection response={response} />
				<CategoriesSection response={response} />
			</Suspense>
			<CustomHomeFooter />;
		</main>
	);
}
export const dynamic = 'force-dynamic';
