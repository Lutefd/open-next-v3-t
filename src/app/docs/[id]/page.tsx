import LoadingSpinner from '@/components/LoadingSpinner';
import Sidebar from '@/components/documentations/Sidebar';
import { Suspense } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { marked } from 'marked';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
	const fetcher = async () => {
		const resp = fetch(
			`http://15.229.214.76:1337/api/documentations/${params.id}/`,
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

	const createHeader = (level: number) => {
		const Header = (props: any) => {
			const textContent = React.Children.toArray(props.children).reduce(
				(acc: string, child: any) => {
					if (typeof child === 'string') {
						return acc + child;
					}
					if (child.props && child.props.children) {
						return acc + child.props.children;
					}
					return acc;
				},
				''
			);
			const id = textContent.replace(/\s+/g, '-').toLowerCase();
			return React.createElement(`h${level}`, { id }, props.children);
		};
		Header.displayName = `H${level}`;
		return Header;
	};
	const H1 = createHeader(1);
	const H2 = createHeader(2);
	const H3 = createHeader(3);
	const H4 = createHeader(4);
	const H5 = createHeader(5);
	const H6 = createHeader(6);
	return (
		<main className={`font-sans xl:px-24 2xl:px-44 documentations flex`}>
			<Suspense
				fallback={
					<div className="h-full w-full grid place-items-center">
						<LoadingSpinner />
					</div>
				}
			>
				<div className="lg:grid  lg:grid-cols-[1fr,3fr] lg:gap-2 w-full pb-10">
					<Sidebar markdown={response.data.attributes.docs} />
					<div className="prose !documentations pt-4 px-2 prose-headings:font-light xl:max-w-[100ch] 2xl:max-w-[120ch]">
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							rehypePlugins={[rehypeRaw]}
							components={{
								h1: H1,
								h2: H2,
								h3: H3,
								h4: H4,
								h5: H5,
								h6: H6,
							}}
						>
							{response.data.attributes.docs}
						</ReactMarkdown>
					</div>
				</div>
			</Suspense>
		</main>
	);
}
type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const id = params.id;
	const response = await fetch(
		`http://15.229.214.76:1337/api/documentations/${id}`
	).then((res) => res.json());
	if (response.data == null) {
		notFound();
	}

	function extractFirstH1Text(markdown: string): string | null {
		const lexer = new marked.Lexer();
		const tokens = lexer.lex(markdown);

		for (let token of tokens) {
			if (token.type === 'heading' && token.depth === 1) {
				return token.text;
			}
		}

		return null;
	}
	const title = extractFirstH1Text(response.data.attributes.docs);

	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: title,
	};
}
