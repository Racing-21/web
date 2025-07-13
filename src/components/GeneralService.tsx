import { FC } from "react";
import Image from "next/image";

// CSS for flip card animation
import "./flip-card.css";

// Define types for the component props
interface Feature {
	value: string;
	image?: string; // Add image property for background image
}

interface Category {
	name: string;
	features: Feature[];
	image?: string; // Add image property for background image
}

interface PriceItem {
	name: string;
	price?: number;
	priceFrom?: number;
	priceTo?: number;
}

interface PriceSection {
	title: string;
	items: PriceItem[];
}

interface PriceList {
	title: string;
	sections: PriceSection[];
}

interface GeneralServiceProps {
	categories: Category[];
	priceList: PriceList;
}

// Category Card component
const CategoryCard: FC<{ category: Category }> = ({ category }) => {
	return (
		<div className="flip-card h-[250px] w-full hover:cursor-pointer">
			<div className="flip-card-inner w-full h-full relative">
				{/* Front side */}
				<div className="flip-card-front w-full h-full rounded-lg overflow-hidden shadow-md">
					<div className="absolute inset-0 overflow-hidden">
						{category.image ? (
							<>
								<Image
									src={category.image}
									alt={category.name}
									layout="fill"
									objectFit="cover"
									className="transition-transform duration-200 ease-in-out transform group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black opacity-50 h-full w-full"></div>
							</>
						) : (
							<div className="bg-red-600 w-full h-full"></div>
						)}
					</div>
					<h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center text-2xl font-bold z-10 w-full px-2">
						{category.name}
					</h3>
				</div>

				{/* Back side */}
				<div className="flip-card-back w-full h-full bg-black rounded-lg shadow-md p-4">
					<h3 className="text-xl font-bold text-red-600 mb-3">{category.name}</h3>
					<ul className="space-y-2">
						{category.features.map((feature, index) => (
							<li
								className="text-white text-sm"
								key={`${category.name}_${feature.value}_${index}`}
							>
								{feature.value}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

// Price Item component
const PriceItem: FC<{ item: PriceItem }> = ({ item }) => {
	const displayPrice = () => {
		if (item.price) {
			return `${item.price} Kč`;
		} else if (item.priceFrom && item.priceTo) {
			return `${item.priceFrom} - ${item.priceTo} Kč`;
		} else if (item.priceFrom) {
			return `od ${item.priceFrom} Kč`;
		} else if (item.priceTo) {
			return `do ${item.priceTo} Kč`;
		}
		return "Cena na vyžádání";
	};

	return (
		<div className="flex justify-between py-2 border-b border-gray-200">
			<span className="font-medium">{item.name}</span>
			<span className="text-red-600 font-semibold">{displayPrice()}</span>
		</div>
	);
};

// Price Section component
const PriceSection: FC<{ section: PriceSection }> = ({ section }) => {
	return (
		<div className="mb-8">
			<h3 className="text-xl font-bold mb-4 text-white">{section.title}</h3>
			<div className="space-y-2">
				{section.items.map((item, index) => (
					<PriceItem key={`${item.name}_${index}`} item={item} />
				))}
			</div>
		</div>
	);
};

// Main component
export const GeneralService: FC<GeneralServiceProps> = ({ categories, priceList }) => {
	return (
		<div className="bg-grayPrimary py-16 sm:py-24 rounded-lg">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl mb-12">
						Naše služby
					</h2>

					{/* Categories Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
						{categories.map((category, index) => (
							<CategoryCard key={`${category.name}_${index}`} category={category} />
						))}
					</div>

					{/* Price List */}
					<div className="bg-black rounded-lg shadow-md p-6">
						<h2 className="text-2xl font-bold text-red-700 mb-6">{priceList.title}</h2>
						{priceList.sections.map((section, index) => (
							<PriceSection key={`${section.title}_${index}`} section={section} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GeneralService;
