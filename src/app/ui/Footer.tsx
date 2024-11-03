import Image from "next/image";
import logo from "@/images/logo.png";
import { NAVIGATION } from "@/app/types/NavigationTypes";
import Link from "next/link";

export default function Footer() {
	return (
		<footer aria-labelledby="footer-heading" className={"px-3"}>
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto max-w-7xl py-16 sm:py-24  lg:py-32">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<Image alt="Company name" src={logo} />
					<div className="mt-16 grid grid-cols-1 gap-2 xl:col-span-2 xl:mt-0">
						<div className="grid grid-cols-3 md:grid md:grid-cols-6 md:gap-1">
							{NAVIGATION.map((item, index) => (
								<div key={`${item}_${index}`}>
									<Link
										href={item.topLink}
										className="text-sm font-semibold leading-6 text-white m-0"
									>
										{item.title}
									</Link>
									<ul role="list" className="mt-3 space-y-3">
										{item.links.map((item) => (
											<li key={`${item.name}_${index}_footer`}>
												<Link
													href={item.href}
													className="text-sm leading-6 text-gray-200 hover:text-red"
												>
													{item.name}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
