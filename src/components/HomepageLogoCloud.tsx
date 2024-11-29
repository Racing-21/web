"use client";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/autoplay";
import { PartnersPartner } from "../../tina/__generated__/types";
import Link from "next/link";

export const HomepageLogoCloud = ({
	partners,
}: {
	partners?: (PartnersPartner | null)[] | null;
}) => {
	if (!partners) return null;

	return (
		<div className="bg-gray-200">
			<div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
				<p className="text-center text-base font-semibold text-gray-500">
					Partnerské produkty, které jsou našim důležitým pomocníkem
				</p>
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={50}
					autoplay={true}
					speed={300}
					modules={[Autoplay]}
					loop={true}
					className="mt-4 absolute"
				>
					{partners?.map((partner) => (
						<SwiperSlide
							key={`slide_${partner?.name}`}
							className="max-w-[100px] md:max-w-[200px] md:w-[300px] flex justify-center h-12"
						>
							<div className="w-[100px] md:w-[200px] flex justify-center h-12">
								<Link href={partner?.link ?? "/"} target={"_blank"}>
									{partner?.logo && (
										<Image alt={partner.name} src={partner.logo} fill />
									)}
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};
