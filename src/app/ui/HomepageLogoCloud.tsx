import Image from "next/image";

export const HomepageLogoCloud = () => {
	return (
		<div className="bg-grayPrimary">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
				<p className="text-center text-base font-semibold text-gray-500">
					Produkty, které nám pomáhají, v tom co děláme
				</p>
				<div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
					<div className="relative col-span-1 flex justify-center md:col-span-2 lg:col-span-1 h-12">
						<Image
							alt="Tuple"
							src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
							fill
						/>
					</div>
					<div className="relative col-span-1 flex justify-center md:col-span-2 lg:col-span-1 h-12">
						<Image
							alt="Mirage"
							src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
							fill
						/>
					</div>
					<div className="relative col-span-1 flex justify-center md:col-span-2 lg:col-span-1 h-12">
						<Image
							alt="StaticKit"
							src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
							fill
						/>
					</div>
					<div className="relative col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1 h-12">
						<Image
							alt="Transistor"
							src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
							fill
						/>
					</div>
					<div className="relative col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1 h-12">
						<Image
							alt="Workcation"
							src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
							fill
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
