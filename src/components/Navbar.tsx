'use client';
import React, { useRef, useState } from 'react';
import Logo from '../assets/positivo.svg';
import Link from 'next/link';
import CloseIcon from '../assets/icons/ic_close.svg';
import MenuIcon from '../assets/icons/ic_menu.svg';
import Image from 'next/image';
import useOutsideClick from '@/hooks/useOutsideClick';
import ChevronDown from '@/assets/icons/chevron-down.svg';
import { signIn, signOut, useSession } from 'next-auth/react';
import PrimaryButton from './PrimaryButton';

interface NavbarProps {
	isLoggedIn: boolean;
}

interface Link {
	name: string;
	href: string;
	isNested?: boolean;
	nestedLinks?: Link[];
}

const Navbar = () => {
	const session = null;
	const [isOpen, setIsOpen] = useState(false);
	const [expandedLink, setExpandedLink] = useState<string | null>(null);

	const node = useRef<HTMLDivElement>(null);
	const buttonNode = useRef<HTMLButtonElement>(null);
	useOutsideClick([node, buttonNode], () => {
		if (isOpen) {
			setIsOpen(false);
		}
	});
	const handleChevronClick = (name: string) => {
		if (expandedLink === name) {
			setExpandedLink(null);
		} else {
			setExpandedLink(name);
		}
	};

	const generateLinks = (links: Link[], mobileView: boolean = false) => {
		return links.map((link, index) => {
			if (link.nestedLinks) {
				return (
					<div
						key={link.name}
						className={`relative ${mobileView ? '' : 'group'}`}
					>
						<div
							className="flex items-center justify-between cursor-pointer"
							onClick={() => handleChevronClick(link.name)}
						>
							<Link
								href={link.href}
								className="block px-3 py-2 rounded-md text-base font-medium text-primary"
								onClick={() => setIsOpen(false)}
							>
								{link.name}
							</Link>
							<Image
								src={ChevronDown}
								alt="Chevron Down"
								width={20}
								height={20}
								className={`${
									expandedLink === link.name && mobileView
										? 'rotate-180'
										: ''
								} transition duration-300 ease-in-out`}
							/>
						</div>
						<div
							className={`pt-2 ${
								mobileView && expandedLink === link.name
									? 'block'
									: mobileView
									? 'hidden'
									: 'absolute left-0 hidden group-hover:block'
							} bg-white z-20  min-w-[10rem]`}
						>
							{generateLinks(link.nestedLinks, mobileView)}
						</div>
					</div>
				);
			} else {
				return (
					<Link
						key={link.name}
						href={link.href}
						className={`block px-3 py-2  text-base font-medium whitespace-nowrap text-primary ${
							links.length - 1 !== index && link.isNested
								? 'border-b-[1px]'
								: ''
						} ${
							link.isNested
								? 'hover:border-b-primary-brighter border-b-[1px] hover:text-primary-brighter'
								: ''
						}`}
						onClick={() => {
							setIsOpen(false);
							setExpandedLink(null);
						}}
					>
						{link.name}
					</Link>
				);
			}
		});
	};

	const navbarLinks: Link[] = [
		{
			name: 'Suporte',
			href: '#',
			nestedLinks: [{ name: 'FAQ', href: '/faq', isNested: true }],
		},
	];

	const toggleOpen = () => setIsOpen(!isOpen);
	const guestLinks: Link[] = [
		{
			name: 'FAQ',
			href: '/faq',
		},
	];

	const userLinks = <>{generateLinks(navbarLinks)}</>;

	return (
		<nav
			className={` font-sans bg-white py-2 relative border-b-[1px] border-[#CDD3CD]`}
		>
			<div className=" mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<a href={'/'} className="flex-shrink-0  xl:px-[8rem] ">
							<Image
								src={Logo}
								alt="Logo Sicredi"
								width={140}
								height={100}
							/>
						</a>
					</div>
					<div className="hidden md:block xl:pr-[8rem]">
						<div className="ml-10 flex items-baseline space-x-4">
							{/* {session ? userLinks : generateLinks(guestLinks)} */}
							{generateLinks(guestLinks)}
							{!session && (
								<PrimaryButton
									text="Login"
									type="button"
									className="w-32 hover:bg-primary-darker"
									Click={() => {
										signIn('azure-ad');
									}}
								/>
							)}
							{session && (
								<button
									className="block px-3 py-2 rounded-md text-base font-medium text-primary"
									onClick={() => {
										signOut({ callbackUrl: '/' });
									}}
								>
									Logout
								</button>
							)}
						</div>
					</div>
					<div className="md:hidden">
						<button
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-primary focus:outline-none no-select"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={toggleOpen}
							ref={buttonNode}
						>
							{isOpen ? (
								<Image
									src={CloseIcon}
									alt="Close"
									width={20}
									height={20}
								/>
							) : (
								<Image
									src={MenuIcon}
									alt="Menu"
									width={20}
									height={20}
								/>
							)}
						</button>
					</div>
				</div>
				{isOpen && (
					<div
						className={`md:hidden bg-white w-full absolute top-full left-0 z-20 ${
							isOpen ? 'block' : 'hidden'
						}`}
						ref={node}
						id="mobile-menu"
					>
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							{/* {session
                ? generateLinks(navbarLinks, true)
                : generateLinks(guestLinks, true)} */}
							{generateLinks(guestLinks, true)}
							{!session && (
								<PrimaryButton
									text="Login"
									type="button"
									className="w-32 hover:bg-primary-darker"
									Click={() => {
										signIn('azure-ad');
									}}
								/>
							)}
							{session && (
								<button
									className="block px-3 py-2 rounded-md text-base font-medium text-primary"
									onClick={() => {
										signOut({ callbackUrl: '/' });
									}}
								>
									Logout
								</button>
							)}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
