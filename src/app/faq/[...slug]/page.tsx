import Breadcrumbs from '@/components/Breadcrumbs';
import Accordion from '@/components/faq/Accordion';
import CustomHomeFooter from '@/components/home/CustomHomeFooter';
import { notFound } from 'next/navigation';

export default async function Page({
	params,
}: {
	params: { slug: string; query: any };
}) {
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
	if (
		response.data[0] === undefined ||
		response.data[0].attributes === undefined
	)
		return notFound();
	const selectedCategory = response.data.filter(
		(item: any) => item.attributes.slug === params.slug[0]
	);
	const qnas = selectedCategory[0].attributes.qnas.data;
	return (
		<main className="">
			<div
				className={`  font-sans flex flex-col justify-center items-center  pb-12`}
			>
				<div className="self-start md:px-44 py-8">
					<Breadcrumbs title={selectedCategory[0].attributes.title} />
				</div>
				<h1 className="text-4xl md:text-6xl font-[300] text-[#323C32] pb-12 md:pb-24 text-center">
					{selectedCategory[0].attributes.title}
				</h1>
				<Accordion data={qnas} />
			</div>
			<CustomHomeFooter />;
		</main>
	);
}
