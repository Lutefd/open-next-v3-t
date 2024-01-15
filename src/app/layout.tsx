import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import Footer from '@/components/Footer';

const exo_2 = Exo_2({ subsets: ['latin'], variable: '--font-exo2' });

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body
				className={`${exo_2.variable} font-sans min-h-screen flex flex-col`}
				suppressHydrationWarning
			>
				<Navbar />

				{children}
				<Footer />
			</body>
		</html>
	);
}
export const metadata: Metadata = {
	title: {
		template: '%s | Sicredi Cooperativas',
		default: ' Sicredi Cooperativas',
	},
	description: 'Portal de Desenvolvedores da Sicredi Cooperativas',
};
