import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { ContactForm } from "@/app/ui/ContactForm";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function ContactSection() {
	return (
		<div className="relative bg-black">
			<div className="absolute inset-0 r">
				<div className="absolute inset-y-0 left-0 w-1/2 bg-grayPrimary rounded-lg" />
			</div>
			<div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 ">
				<div className="bg-grayPrimary bg-opacity-50 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 rounded-lg">
					<div className="mx-auto max-w-lg rounded-lg">
						<h2 className="text-2xl font-bold tracking-tight text-red-600 sm:text-3xl">
							Kontaktujte nás
						</h2>
						<p className="mt-3 text-lg leading-6 text-gray-100">
							Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa
							dictumst amet. Sapien tortor lacus arcu.
						</p>
						<dl className="mt-8 text-base text-gray-500">
							<h3 className={"text-gray-50"}>Korespondenční adresa</h3>
							<div>
								<dt className="sr-only">Postal address</dt>
								<dd>
									<p>Mistřínská 393</p>
									<p>Praha 5, 155 21</p>
								</dd>
							</div>
							<div className="mt-6">
								<dt className="sr-only">Phone number</dt>
								<dd className="flex">
									<PhoneIcon
										aria-hidden="true"
										className="h-6 w-6 flex-shrink-0 text-gray-400"
									/>
									<span className="ml-3">+1 (555) 123-4567</span>
								</dd>
							</div>
							<div className="mt-3">
								<dt className="sr-only">Email</dt>
								<dd className="flex">
									<EnvelopeIcon
										aria-hidden="true"
										className="h-6 w-6 flex-shrink-0 text-gray-400"
									/>
									<span className="ml-3">support@example.com</span>
								</dd>
							</div>
						</dl>
						<dl className="mt-8 text-base text-gray-500">
							<h3 className={"text-gray-50"}>Závodní dílna</h3>
							<div>
								<dt className="sr-only">Postal address</dt>
								<dd>
									<p>Hájecká 47</p>
									<p>Červený Újezd, 273 51</p>
								</dd>
							</div>
							<div className="mt-6">
								<dt className="sr-only">Phone number</dt>
								<dd className="flex">
									<PhoneIcon
										aria-hidden="true"
										className="h-6 w-6 flex-shrink-0 text-gray-400"
									/>
									<span className="ml-3">+1 (555) 123-4567</span>
								</dd>
							</div>
							<div className="mt-3">
								<dt className="sr-only">Email</dt>
								<dd className="flex">
									<EnvelopeIcon
										aria-hidden="true"
										className="h-6 w-6 flex-shrink-0 text-gray-400"
									/>
									<span className="ml-3">support@example.com</span>
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<div className="bg-grayPrimary px-6 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12 rounded-lg">
					<div className="mx-auto max-w-lg lg:max-w-none">
						<ContactForm backgroundColor={"bg-black"} />
					</div>
				</div>
			</div>
		</div>
	);
}
