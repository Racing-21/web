import Image from "next/image";
import logo from "@/images/logo.png";

const navigation = {
	about: [
		{ name: "O nás", href: "#" },
		{ name: "Tým", href: "#" },
		{ name: "Technika", href: "#" },
		{ name: "Výsledky", href: "#" },
	],
	service: [
		{ name: "Soutěžní a závodní vozy", href: "#" },
		{ name: "Renovace hstorických vozidel a youngtimerů", href: "#" },
		{ name: "Nákup a poradenství v oblasti investičních vozů", href: "#" },
	],
	acccessories: [
		{ name: "Hrx", href: "#" },
		{ name: "Turatello", href: "#" },
		{ name: "Einmax", href: "#" },
		{ name: "Sonax", href: "#" },
		{ name: "Flex", href: "#" },
		{ name: "Rieger a Protlum", href: "#" },
		{ name: "Exedy", href: "#" },
		{ name: "Custom Cages", href: "#" },
	],
	rental: [
		{ name: "Sportovní vozy", href: "#" },
		{ name: "Přívěsy Turatello", href: "#" },
		{ name: "Prostory pro akce a školení", href: "#" },
	],
};

export default function Footer() {
	return (
		<footer aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<Image alt="Company name" src={logo} />
					<div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-4 md:gap-8">
							{Object.values(navigation).map((item, index) => (
								<div key={`${item}_${index}`}>
									<h3 className="text-sm font-semibold leading-6 text-white">
										{Object.keys(navigation)[index]}
									</h3>
									<ul role="list" className="mt-6 space-y-4">
										{item.map((item) => (
											<li key={item.name}>
												<a
													href={item.href}
													className="text-sm leading-6 text-gray-200 hover:text-red"
												>
													{item.name}
												</a>
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
