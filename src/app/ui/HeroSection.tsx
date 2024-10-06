import Image, { StaticImageData } from "next/image";

export type HeroSectionProps = {
	image: StaticImageData;
	title: string;
	subtitle?: string;
	content?: string;
};

export const HeroSection = ({ image, title, subtitle, content }: HeroSectionProps) => {
	return (
		<div className="relative">
			<div className="absolute inset-x-0 bottom-0 h-1/2 bg-grayPrimary" />
			<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
					<div className="absolute inset-0">
						<Image
							alt="People working on laptops"
							src={image}
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-grayPrimary opacity-50 mix-blend-multiply" />
					</div>
					<div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
						<h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
							<span className="text-4xl block text-white">{title}</span>
							{subtitle && <span className="block text-red-600">{subtitle}</span>}
						</h1>
						{content && (
							<p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
								{content}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};