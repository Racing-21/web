"use client";

import { useState } from "react";
import logo from "@/images/logo.png";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems, PopoverGroup } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/app/types/NavigationTypes";
import MobileNavigation from "@/app/ui/MobileNavigation";

export default function Navigation() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<header className="relative isolate z-10 bg-black">
			<nav
				aria-label="Global"
				className="mx-auto flex lg:grid max-w-7xl items-center justify-between lg:justify-center py-6 px-3 md:px-0"
			>
				<div className="flex lg:hidden">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Racing21</span>
						<Image alt="" src={logo} className="h-8 w-auto" />
					</Link>
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

				<PopoverGroup className="hidden lg:flex gap-x-4 xl:gap-x-12 bg-black main-menu">
					<div className="hidden lg:flex">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Racing21</span>
							<Image alt="" src={logo} className="h-8 w-auto" />
						</Link>
					</div>
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
			<MobileNavigation
				setMobileMenuOpen={setMobileMenuOpen}
				mobileMenuOpen={mobileMenuOpen}
			/>
		</header>
	);
}
