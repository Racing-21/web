import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NAVIGATION } from "@/app/types/NavigationTypes";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function MobileNavigation({
	setMobileMenuOpen,
	mobileMenuOpen,
}: {
	setMobileMenuOpen: (setMobileMenuOpen: boolean) => void;
	mobileMenuOpen: boolean;
}) {
	return (
		<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
			<div className="fixed inset-0 z-10" />
			<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-grayPrimary sm:max-w-sm">
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
									className=" w-full py-2"
									key={`navigationItem_mobile_${i}`}
								>
									{navigationItem?.links?.length === 0 ? (
										<Link
											key={navigationItem.title}
											href={`/${navigationItem.topLink}`}
											className="text-black"
											onClick={() => setMobileMenuOpen(false)}
										>
											{navigationItem.title}
										</Link>
									) : (
										<>
											<div
												className={
													"flex w-full justify-between items-center"
												}
											>
												<div className={"flex w-4/5"}>
													<Link
														href={`/${navigationItem.topLink}`}
														className={"text-black"}
														onClick={() => setMobileMenuOpen(false)}
													>
														{navigationItem.title}
													</Link>
												</div>

												<DisclosureButton className="group  w-1/5 flex items-center justify-center rounded-lg py-2 text-base font-semibold text-gray-900">
													<ChevronDownIcon
														aria-hidden="true"
														className="h-5 w-5 flex-none group-data-[open]:rotate-180"
													/>
												</DisclosureButton>
											</div>

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
										</>
									)}
								</Disclosure>
							))}
						</div>
					</div>
				</div>
			</DialogPanel>
		</Dialog>
	);
}
