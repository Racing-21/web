import { Vehicle } from "@/app/ui/VehicleInformationDetail";

export const VEHICLES: Vehicle[] = [
	{
		name: "Toyota Celica GT-Four ST165",
		slug: "toyota-celica-gt-four-st165",
		images: [
			"http://www.racing21.cz/grap/technika1-22.jpg",
			"http://www.racing21.cz/grap/technika2-19.jpg",
			"http://www.racing21.cz/grap/technika3-19.jpg",
			"http://www.racing21.cz/grap/technika4-19.jpg",
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
			torque: "380 Nm / 4.400 min-1",
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
			"http://www.racing21.cz/grap/technika1-20.jpg",
			"http://www.racing21.cz/grap/technika2-19.jpg",
			"http://www.racing21.cz/grap/technika3-19.jpg",
			"http://www.racing21.cz/grap/technika4-19.jpg",
		],
		general: {
			body: "Ochranný rám – homologace FIA",
			length: "4.067 mm",
			width: "1.942 mm",
			height: "1.372 mm",
			wheelbase: "2.540 mm",
			weight: "1.230 kg",
		},
		engine: {
			type: "Přeplňovaný řadový čtyřválec",
			volume: "1.600 cm3",
			power: "200 kW (272 k) / 5.500 min-1",
			torque: "400 Nm / 4.000 min-1",
			bore: "82.5 x 75.5 mm",
			restrictor: "32 mm",
			controlUnit: "Bosch",
		},
		driveTrain: {
			drive: "stálý – všechna kola",
			transmission: "závodní, pětistupňová sekvenční",
			clutch: "hydraulicky ovládaná, dvoukotoučová",
		},
		brakes: {
			discs: "vnitřně chlazené",
			dimensions: {
				front: "355 mm",
				rear: "300 mm",
			},
			calipers: "hliníkové",
		},
		suspension: {
			front: "McPherson zavěšení",
			rear: "McPherson zavěšení",
			drive: "Servo-posilovač, pastorek",
		},
		rims: {
			dimensions: {
				front: '15" - 18"',
				rear: '15" - 18"',
			},
		},
		tires: {
			dimensions: {
				front: "235/40-R18 (asfalt) / 215/60-R15 (šotolina)",
				rear: "235/40-R18 (asfalt) / 215/60-R15 (šotolina)",
			},
		},
	},
	{
		name: "Opel Kadett C GT/E",
		slug: "opel-kadett-C-GT-E",
		images: [
			"http://www.racing21.cz/grap/technika5-22.jpg",
			"http://www.racing21.cz/grap/technika6-22.jpg",
			"http://www.racing21.cz/grap/technika7-22.jpg",
			"http://www.racing21.cz/grap/technika8-22.jpg",
		],
		general: {
			body: "Dvoudveřové kupé",
			length: "4.124 mm",
			width: "1.720 mm",
			wheelbase: "2.395 mm",
			weight: "955 kg",
		},
		engine: {
			type: "Atmosférický řadový čtyřválec CIH",
			volume: "1.999 cm3",
			power: "148 kW / 7.500 min-1",
			torque: "200Nm / 6.000 min-1",
		},
		driveTrain: {
			drive: "Zadní náhon",
			transmission: "synchronní 5stupňová",
		},
		brakes: {
			type: {
				front: "Kotoučové",
				rear: "Bubnové",
			},
			discs: "vnitřně chlazené",
			dimensions: {
				front: "355 mm",
				rear: "300 mm",
			},
			calipers: "hliníkové",
		},
		rims: {
			dimensions: {
				front: '13"',
				rear: '13"',
			},
		},
		tires: {
			dimensions: {
				front: "Pirelli 225/45-R13",
				rear: "Pirelli 225/45-R13",
			},
		},
	},
];
