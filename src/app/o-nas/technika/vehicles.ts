import { Vehicle } from "@/app/ui/VehicleInformationDetail";

export const VEHICLES: Vehicle[] = [
	{
		name: "Toyota Celica GT-Four ST165",
		slug: "toyota-celica-gt-four-st165",
		images: [
			"http://www.racing21.cz/grap/technika1-22.jpg",
			"http://www.racing21.cz/grap/technika2-22.jpg",
			"http://www.racing21.cz/grap/technika3-22.jpg",
			"http://www.racing21.cz/grap/technika4-22.jpg",
		],
		general: {
			body: "bezpečnostní rám – homologace FIA",
			length: "4.365 mm",
			width: "1.710 mm",
			wheelbase: "2.525 mm",
			weight: "1.100 kg",
		},
		engine: {
			type: "Přeplňovaný řadový čtyřválec 3S-GTE",
			volume: "1.998 cm3",
			power: "198 kW PS / 6000 min-1",
			torque: "380 Nm při 4.400 min-1",
			bore: "86,0 x 86,0 mm",
			compressRatio: "8,5 :1",
		},
		driveTrain: {
			drive: "pohon všech kol 4WD",
			transmission: "X-Trac, 6stupňová, manuální",
		},
		brakes: {
			discs: "Ventilované",
			dimensions: {
				front: "až 330 mm",
				rear: "až 330 mm",
			},
		},
		suspension: {
			front: "Vzpěry MacPherson",
			rear: "Vzpěry MacPherson",
			drive: "Hřebenové s pastorkem",
		},
		rims: {
			dimensions: {
				front: '16"',
				rear: '16"',
			},
		},
		tires: {
			dimensions: {
				front: "Pirelli 195/65 R16",
				rear: "Pirelli 195/65 R16",
			},
		},
	},
	{
		name: "Volkswagen Polo GTI R5",
		slug: "volkswagen-polo-gti-r5",
		images: [
			"http://www.racing21.cz/grap/technika1-22.jpg",
			"http://www.racing21.cz/grap/technika2-22.jpg",
			"http://www.racing21.cz/grap/technika3-22.jpg",
			"http://www.racing21.cz/grap/technika4-22.jpg",
		],
		general: {
			body: "bezpečnostní rám – homologace FIA",
			length: "4.365 mm",
			width: "1.710 mm",
			wheelbase: "2.525 mm",
			weight: "1.100 kg",
		},
		engine: {
			type: "Přeplňovaný řadový čtyřválec 3S-GTE",
			volume: "Přeplňovaný řadový čtyřválec 3S-GTE",
			power: "Přeplňovaný řadový čtyřválec 3S-GTE",
			torque: "Přeplňovaný řadový čtyřválec 3S-GTE",
			bore: "Přeplňovaný řadový čtyřválec 3S-GTE",
			compressRatio: "Přeplňovaný řadový čtyřválec 3S-GTE",
		},
		driveTrain: {
			drive: "pohon všech kol 4WD",
			transmission: "X-Trac, 6stupňová, manuální",
		},
		brakes: {
			discs: "Ventilované",
			dimensions: {
				front: "až 330 mm",
				rear: "až 330 mm",
			},
		},
		suspension: {
			front: "Vzpěry MacPherson",
			rear: "Vzpěry MacPherson",
			drive: "Hřebenové s pastorkem",
		},
		rims: {
			dimensions: {
				front: '16"',
				rear: '16"',
			},
		},
		tires: {
			dimensions: {
				front: "Pirelli 195/65 R16",
				rear: "Pirelli 195/65 R16",
			},
		},
	},
];
