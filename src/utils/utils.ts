import { MaybeString } from "@/components/VehicleInformationDetail";

export function parseVehicleImages(images: MaybeString | (string | null)[]) {
	if (Array.isArray(images)) {
		return images.filter((image) => image !== null);
	} else if (images !== null && images !== undefined) {
		return [images];
	} else {
		return [];
	}
}

export const normalizeNameForUrlSlug = (name: string | undefined) => {
	if (!name) {
		return "";
	}
	return name
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.split(" ")
		.join("-")
		.toLowerCase();
};
