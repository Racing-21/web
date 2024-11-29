import Image from "next/image";
import { Carousel } from "flowbite-react";

export const SliderGallery = ({ images }: { images: { src: string; alt: string }[] }) => {
	return (
		<Carousel slide={false}>
			{images.map((image) => (
				<Image
					key={`${image.src}`}
					src={image.src}
					alt=""
					height={450}
					width={800}
					style={{
						width: "100%",
						height: "100%",
					}}
				/>
			))}
		</Carousel>
	);
};
