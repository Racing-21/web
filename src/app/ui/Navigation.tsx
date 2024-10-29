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
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/app/types/NavigationTypes";

export default function Navigation() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<header className="relative isolate z-10 bg-black">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between py-6 px-3 md:px-0"
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
					{NAVIGATION.map((navigationItem, i) => (
						<Menu key={`navigation_${i}`}>
							<div
								className={`group flex rounded-md  p-1 ${pathname?.includes(navigationItem.topLink) ? "bg-gray-200 text-black" : ""} navigationItem`}
							>
								<Link
									href={`/${navigationItem.topLink}`}
									className={`ml-1 mr-1  ${pathname?.includes(navigationItem.topLink) ? "text-black" : "text-gray-50"} navigationItem-topLink`}
								>
									{navigationItem.title}
								</Link>
								{navigationItem.links?.length > 0 && (
									<MenuButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-50 border-transparent rounded-md border-2 bg-grayPrimary hover:border-gray-50 active:outline:none">
										<ChevronDownIcon
											aria-hidden="true"
											className={`h-5 w-5 flex-none group-data-[open]:rotate-180 text-gray-50`}
										/>
									</MenuButton>
								)}

								<MenuItems
									transition
									className="absolute inset-x-0 top-0 -z-10 bg-grayPrimary pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
								>
									<MenuItem>
										{({ close }) => (
											<div
												className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8"
												onClick={close}
											>
												{navigationItem.links?.map((item) => (
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
														<Link
															href={item.href}
															className="mt-6 block font-semibold text-gray-50 group-hover/item:text-red-900"
															onClick={close}
														>
															{item.name}
															<span className="absolute inset-0" />
														</Link>
														<p className="mt-1 text-gray-200  group-hover/item:text-gray-800">
															{item.description}
														</p>
													</div>
												))}
											</div>
										)}
									</MenuItem>
								</MenuItems>
							</div>
						</Menu>
					))}
				</PopoverGroup>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-grayPrimary sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between w-full px-3 py-6">
						<Link href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Racing21</span>
							<Image alt="" src={logo} className="h-8 w-auto" />
						</Link>
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
								{NAVIGATION.map((navigationItem, i) => (
									<Disclosure
										as="div"
										className="-mx-3"
										key={`navigationItem_mobile_${i}`}
									>
										<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											{navigationItem.title}
											<ChevronDownIcon
												aria-hidden="true"
												className="h-5 w-5 flex-none group-data-[open]:rotate-180"
											/>
										</DisclosureButton>
										<DisclosurePanel className="mt-2 space-y-2">
											{navigationItem.links?.map((item) => (
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
								))}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
