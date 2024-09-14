"use client";

import { useState } from "react";
import logo from "@/images/logo.png";
import Image from "next/image";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from "@headlessui/react";
import {
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const about = [
	{
		name: "Náš tým",
		description: "Informace o členech závodního týmu Racing 21",
		href: "/o-nas/tym",
		icon: ChartPieIcon,
	},
	{
		name: "Technika",
		description: "Specifikace našich závodních speciálů a vybavení",
		href: "/o-nas/tym",
		icon: CursorArrowRaysIcon,
	},
	{
		name: "Výsledky",
		description: "Přehled úspěchů týmu Racing 21 v závodech v české republice i ve světě",
		href: "/o-nas/tym",
		icon: FingerPrintIcon,
	},
];

export default function Navigation() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="relative isolate z-10 bg-black">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			>
				<div className="flex lg:flex-1">
					<a href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Racing21</span>
						<Image alt="" src={logo} className="h-8 w-auto" />
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6 text-white" />
					</button>
				</div>
				<PopoverGroup className="hidden lg:flex lg:gap-x-12 bg-black main-menu">
					<Popover className={"group"}>
						<PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-50">
							Náš tým
							<ChevronDownIcon
								aria-hidden="true"
								className="h-5 w-5 flex-none text-gray-200  group-data-[open]:rotate-180"
							/>
						</PopoverButton>

						<PopoverPanel
							transition
							className="absolute inset-x-0 top-0 -z-10 bg-grayPrimary pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
						>
							<div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
								{about.map((item) => (
									<div
										key={item.name}
										className="group/item relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
									>
										<div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover/item:bg-black">
											<item.icon
												aria-hidden="true"
												className="h-6 w-6 text-gray-600 group-hover/item:text-red-600"
											/>
										</div>
										<a
											href={item.href}
											className="mt-6 block font-semibold text-gray-100 group-hover/item:text-red-900"
										>
											{item.name}
											<span className="absolute inset-0" />
										</a>
										<p className="mt-1 text-gray-200  group-hover/item:text-gray-800">
											{item.description}
										</p>
									</div>
								))}
							</div>
						</PopoverPanel>
					</Popover>

					<a href="#" className="text-sm font-semibold leading-6 text-gray-50">
						Autodílna
					</a>
					<a href="#" className="text-sm font-semibold leading-6 text-gray-50">
						Shop
					</a>
					<a href="#" className="text-sm font-semibold leading-6 text-gray-50">
						Pronájem
					</a>
				</PopoverGroup>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-grayPrimary sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between px-6 py-6">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Racing21</span>
							<Image alt="" src={logo} className="h-8 w-auto" />
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-100"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="flow-root bg-white px-6 grow-1 h-full">
						<div className="divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										O nás
										<ChevronDownIcon
											aria-hidden="true"
											className="h-5 w-5 flex-none group-data-[open]:rotate-180"
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										{[...about].map((item) => (
											<DisclosureButton
												key={item.name}
												as="a"
												href={item.href}
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>
												{item.name}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Autodílna
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Shop
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Pronájem
								</a>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
