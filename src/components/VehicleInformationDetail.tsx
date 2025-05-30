import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import EngineIcon from "@/images/icons/engine.svg";
import TireIcon from "@/images/icons/tire.svg";
import DrivetrainIcon from "@/images/icons/drivetrain.svg";
import CarIcon from "@/images/icons/car.svg";

export type Maybe<T> = T | undefined | null;
export type MaybeString = Maybe<string>;
export type MaybeNumber = Maybe<number>;
type VehicleGeneralType = {
	length?: MaybeNumber;
	height?: MaybeNumber;
	width?: MaybeNumber;
	wheelbase?: MaybeNumber;
	weight?: MaybeNumber;
	torque?: MaybeString;
	body?: MaybeString;
};

type VehicleEngineType = {
	type?: MaybeString;
	volume?: MaybeNumber;
	power?: MaybeString;
	torque?: MaybeString;
	bore?: MaybeString;
	restrictor?: MaybeString;
	controlUnit?: MaybeString;
	compressRatio?: MaybeString;
};

type DrivetrainType = {
	drive?: MaybeString;
	transmission?: MaybeString;
	clutch?: MaybeString;
};

type BrakesType = {
	type_front?: MaybeString;
	type_rear?: MaybeString;
	discs?: MaybeString;
	dimensions_front?: MaybeString;
	dimensions_rear?: MaybeString;
	calipers?: MaybeString;
};

type SuspensionType = {
	front?: MaybeString;
	rear?: MaybeString;
	drive?: MaybeString;
};

type RimsType = {
	dimensions_front?: MaybeString;
	dimensions_rear?: MaybeString;
};

type TiresType = {
	dimensions_front?: MaybeString;
	dimensions_rear?: MaybeString;
};

export type Vehicle = {
	name: string;
	slug: string;
	images?: MaybeString | (string | null)[];
	general?: Maybe<VehicleGeneralType>;
	engine?: Maybe<VehicleEngineType>;
	drivetrain?: Maybe<DrivetrainType>;
	brakes?: Maybe<BrakesType>;
	suspension?: Maybe<SuspensionType>;
	rims?: Maybe<RimsType>;
	tires?: Maybe<TiresType>;
};

const InformationItem = ({
	name,
	value,
}: {
	name: MaybeString;
	value?: MaybeString | MaybeNumber;
}) => {
	if (!value) {
		return null;
	}

	return (
		<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
			<dt className="text-sm font-medium text-gray-900">{name}</dt>
			<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{value}</dd>
		</div>
	);
};

export default function VehicleInformationDetail({ vehicle }: { vehicle: Vehicle }) {
	const vehicleImages = Array.isArray(vehicle.images)
		? vehicle.images?.filter((image) => image !== null)
		: vehicle.images
			? [vehicle.images]
			: [];

	return (
		<>
			<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
				<TabGroup className="flex flex-col-reverse">
					{/* Image selector */}
					<div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
						<TabList className="grid grid-cols-4 gap-6">
							{vehicleImages.map((image) => (
								<Tab
									key={image}
									className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
								>
									<span className="sr-only">{image}</span>
									<span className="absolute inset-0 overflow-hidden rounded-md">
										<Image
											alt=""
											src={image}
											width={200}
											height={150}
											className="h-full w-full object-cover object-center"
										/>
									</span>
									<span
										aria-hidden="true"
										className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
									/>
								</Tab>
							))}
						</TabList>
					</div>

					<TabPanels className="aspect-h-1 aspect-w-1 w-full">
						{vehicleImages.map((image) => (
							<TabPanel key={image} className={"relative h-[400px] w-full"}>
								<Image
									alt={image}
									src={image}
									fill
									className="h-full w-full object-cover object-center sm:rounded-lg"
								/>
							</TabPanel>
						))}
					</TabPanels>
				</TabGroup>
				<div className="overflow-hidden bg-white shadow sm:rounded-lg">
					<div className="px-4 py-3 sm:px-6 mt-2">
						<div className={"flex items-center"}>
							<Image
								src={CarIcon}
								alt={"Ikona siluety auta"}
								width={40}
								height={40}
							/>
							<h3 className="text-base font-semibold leading-7 text-gray-900 ml-2">
								Obecné údaje
							</h3>
						</div>
					</div>
					<div className="border-t border-gray-100">
						<dl className="divide-y divide-gray-100">
							<InformationItem name={"Značka a model"} value={vehicle.name} />
							<InformationItem name={"Délka"} value={vehicle.general?.length} />
							<InformationItem name={"Max šířka"} value={vehicle.general?.width} />
							<InformationItem name={"Rozvor"} value={vehicle.general?.wheelbase} />
							<InformationItem name={"Hmotnost"} value={vehicle.general?.weight} />
							<InformationItem name={"Karoserie"} value={vehicle.general?.body} />
						</dl>
						<div className="px-4 py-3 sm:px-6">
							<div className={"flex items-center"}>
								<Image
									src={EngineIcon}
									alt={"Ikona motoru"}
									width={40}
									height={40}
								/>
								<h3 className="text-base font-semibold leading-7 text-gray-900 ml-2">
									Motor
								</h3>
							</div>
						</div>
						<dl className="divide-y divide-gray-100">
							<InformationItem name={"Typ"} value={vehicle.engine?.type} />
							<InformationItem name={"Objem"} value={vehicle.engine?.volume} />
							<InformationItem name={"Výkon"} value={vehicle.engine?.power} />
							<InformationItem
								name={"Točivý moment"}
								value={vehicle.engine?.torque}
							/>
							<InformationItem name={"Vrtání/Zdvih"} value={vehicle.engine?.bore} />
							{vehicle.engine?.compressRatio && (
								<InformationItem
									name={"Kompresní poměr"}
									value={vehicle.engine.compressRatio}
								/>
							)}
							{vehicle.engine?.restrictor && (
								<InformationItem
									name={"Restriktor"}
									value={vehicle.engine.restrictor}
								/>
							)}
							{vehicle.engine?.controlUnit && (
								<InformationItem
									name={"Řídící jednotka"}
									value={vehicle.engine.controlUnit}
								/>
							)}
						</dl>
						<div className="px-4 py-3 sm:px-6">
							<div className={"flex items-center"}>
								<Image
									src={DrivetrainIcon}
									alt={"Ikona hnacího ústrojí"}
									width={40}
									height={40}
								/>
								<h3 className="text-base font-semibold leading-7 text-gray-900 ml-2">
									Hnací ústrojí
								</h3>
							</div>
						</div>
						<dl className="divide-y divide-gray-100">
							<InformationItem name={"Pohon"} value={vehicle.drivetrain?.drive} />
							<InformationItem
								name={"Převodovka"}
								value={vehicle.drivetrain?.transmission}
							/>
							{vehicle.drivetrain?.clutch && (
								<InformationItem
									name={"Spojka"}
									value={vehicle.drivetrain.clutch}
								/>
							)}
						</dl>
						<div className="px-4 py-3 sm:px-6">
							<h3 className="text-base font-semibold leading-7 text-gray-900">
								Brzdy
							</h3>
						</div>
						<dl className="divide-y divide-gray-100">
							<InformationItem
								name={"Brzdy vpředu"}
								value={vehicle.brakes?.type_front ?? ""}
							/>
							<InformationItem
								name={"Brzdy vzadu"}
								value={vehicle.brakes?.type_rear ?? ""}
							/>
							<InformationItem name={"Kotouče"} value={vehicle.brakes?.discs} />
							<InformationItem
								name={"Rozměr vpředu"}
								value={vehicle.brakes?.dimensions_front ?? ""}
							/>
							<InformationItem
								name={"Rozměr vzadu"}
								value={vehicle.brakes?.dimensions_rear ?? ""}
							/>
							<InformationItem name={"Třmeny"} value={vehicle.brakes?.calipers} />
						</dl>
						{vehicle.suspension && (
							<>
								<div className="px-4 py-3 sm:px-6">
									<h3 className="text-base font-semibold leading-7 text-gray-900">
										Podvozek
									</h3>
								</div>

								<dl className="divide-y divide-gray-100">
									<InformationItem
										name={"Náprava vpředu"}
										value={vehicle.suspension.front}
									/>
									<InformationItem
										name={"Náprava vzadu"}
										value={vehicle.suspension.rear}
									/>
									<InformationItem
										name={"Řízení"}
										value={vehicle.suspension.drive}
									/>
								</dl>
							</>
						)}
						<div className="px-4 py-3 sm:px-6">
							<h3 className="text-base font-semibold leading-7 text-gray-900">
								Disky
							</h3>
						</div>
						<dl className="divide-y divide-gray-100">
							<InformationItem
								name={"Velikost - vpředu/vzadu"}
								value={`${vehicle.rims?.dimensions_front} / ${vehicle.rims?.dimensions_rear}`}
							/>
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-900">Velikost</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
									{vehicle.rims?.dimensions_front} /{" "}
									{vehicle.rims?.dimensions_rear}
								</dd>
							</div>
						</dl>
						<div className="px-4 py-3 sm:px-6">
							<div className={"flex items-center"}>
								<Image
									src={TireIcon}
									alt={"Ikona pneumatik"}
									width={40}
									height={40}
								/>
								<h3 className="text-base font-semibold leading-7 text-gray-900">
									Pneumatiky
								</h3>
							</div>
						</div>
						<dl className="divide-y divide-gray-100">
							<InformationItem
								name={"Rozměry - vpředu/vzadu"}
								value={`${vehicle.tires?.dimensions_front} / ${vehicle.tires?.dimensions_rear}`}
							/>
						</dl>
					</div>
				</div>
			</div>
		</>
	);
}
