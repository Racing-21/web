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
