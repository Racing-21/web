import Image, { StaticImageData } from "next/image";

export type HeroSectionProps = {
	image: StaticImageData | string;
	title: string;
	subtitle?: string;
	content?: string;
};

export const HeroSection = ({ image, title, subtitle, content }: HeroSectionProps) => {
	return (
		<div className="relative bg-grayPrimary">
			<div className=" inset-x-0 bottom-0 h-2/3 " />
			<div
				className="relative shadow-xl sm:overflow-hidden max-h-[750px] flex justify-center items-center before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-t
            before:from-black
            before:to-transparent
            before:opacity-90 md:before:opacity-80"
			>
				<Image
					alt="People working on laptops"
					src={image}
					height={450}
					width={800}
					priority
					style={{
						width: "100%",
						height: "auto",
					}}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
				/>
				<div className="absolute bottom-0 px-6 pt-8 lg:px-8">
					<h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
						<span className="text-4xl block text-white">{title}</span>
						{subtitle && (
							<span className="block text-red-600 min-h-24">{subtitle}</span>
						)}
					</h1>
					<p className="mx-auto mt-4 max-w-lg text-center text-xl text-white sm:max-w-3xl">
						{content ? content : " "}
					</p>
				</div>
			</div>
		</div>
	);
};
