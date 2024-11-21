import Image from "next/image";

const partnersCloud = [
	{
		name: "Flex",
		logo: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732108957/Flex_fchaul.svg",
	},
	{
		name: "BG",
		logo: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732108960/BG_f2df0w.svg",
	},
	{
		name: "CPP",
		logo: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732108959/CPP_f5faex.svg",
	},
	{
		name: "Pirelli",
		logo: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732108958/Pirelli_wpy95e.svg",
	},
	{
		name: "Sonax",
		logo: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732108957/Sonax_hlhl8t.svg",
	},
];

export const HomepageLogoCloud = () => {
	return (
		<div className="bg-gray-200">
			<div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
				<p className="text-center text-base font-semibold text-gray-500">
					Partnerské produkty, které jsou našim důležitým pomocníkem
				</p>
				<div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
					{partnersCloud.map((partner) => (
						<div
							className="relative col-span-1 flex justify-center md:col-span-2 lg:col-span-1 h-12"
							key={`
						partnerLogoCloudItem_${partner.name}`}
						>
							<Image alt={partner.name} src={partner.logo} fill />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
