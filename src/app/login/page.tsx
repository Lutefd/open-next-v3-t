import Image from 'next/image';
import { Nunito } from 'next/font/google';
import HeroImage from '@/assets/hero-login.jpeg';
import AzureLogo from '@/assets/azure-ad-logo.png';
import { Metadata } from 'next';
import LoginButton from '@/components/LoginButton';
import { redirect } from 'next/navigation';
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export const metadata: Metadata = {
	title: 'Login',
	description:
		'Página de Login do Portal do Desenvolvedor Sicredi Cooperativas',
};

export default async function Page({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	return (
		<main className="pb-16 md:py-0 md:min-h-[calc(100vh-15rem)]">
			<div className="flex flex-col md:flex-row md:min-h-[calc(100vh-15rem)]">
				<div className="md:w-1/2">
					<Image
						src={HeroImage}
						alt="Hero Image"
						priority
						className="w-full h-full "
					/>
				</div>
				<div className="md:w-1/2 flex flex-col justify-center items-center gap-2 pt-8 md:py-64">
					<h1 className="text-4xl md:text-5xl font-light text-[#323C32] italic  text-center">
						{' '}
						Comece a desenvolver
					</h1>
					<p
						className={`${nunito.variable} font-nunito text-regular md:text-lg font-light text-[#323C32]  px-4 md:px-0 text-center`}
					>
						Entre a partir do AzureAD acessando pelo botão abaixo
					</p>
					<LoginButton provider="azure-ad" callbackUrl={'' as string}>
						Entrar Pelo AzureAD
						<Image
							src={AzureLogo}
							width={32}
							height={32}
							alt="keycloak-logo"
						/>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}
