import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { ContactForm } from "@/components/ContactForm";

export default function ContactSection() {
	return (
		<div className="relative bg-black">
			<div className="absolute inset-0 r">
				<div className="absolute inset-y-0 left-0 w-1/2 bg-grayPrimary rounded-lg" />
			</div>

			<div className="relative mx-auto w-full">
				<div className="flex flex-col lg:flex-row py-6 lg:rounded-lg bg-grayPrimary">
					<div className="w-full lg:w-1/3 mb-2 md:mb-0 px-4 lg:px-10">
						<h2 className="text-2xl font-bold tracking-tight text-red-600 sm:text-3xl">
							Kontaktujte nás
						</h2>
						<dl className="mt-8 text-base text-gray-500">
							<h3 className={"text-gray-50 mb-2 text-lg"}>Korespondenční adresa</h3>
							<div>
								<dt className="sr-only"></dt>
								<dd>
									<p className={"text-gray-200"}>Racing 21 s.r.o.</p>
									<p className={"text-gray-200"}>Mistřínská 393</p>
									<p className={"text-gray-200"}>Praha 5, 155 21</p>
								</dd>
							</div>
							<div className="mt-6 flex">
								<dt className={"text-gray-200"}>IČ: </dt>
								<dd className="flex">
									<span className="ml-2 text-gray-200">04690192</span>
								</dd>
							</div>
							<div className="mt-3 flex">
								<dt className={"text-gray-200"}>DIČ: </dt>
								<dd className="flex">
									<span className="ml-2 text-gray-200">CZ04690192</span>
								</dd>
							</div>
						</dl>
						<dl className="mt-8 text-base text-gray-500">
							<h3 className={"text-gray-50 mb-2 text-lg"}>Provozovna</h3>
							<div>
								<dt className="sr-only">Provozovna</dt>
								<dd>
									<p className={"text-gray-200"}>Hájecká 47</p>
									<p className={"text-gray-200"}>(Příjezd z ulice Za Statkem)</p>
									<p className={"text-gray-200"}>Červený Újezd, 273 51</p>
								</dd>
							</div>
							<div className="mt-6">
								<dt className="sr-only">Telefon</dt>
								<dd className="flex">
									<PhoneIcon
										aria-hidden="true"
										className="h-6 w-6 flex-shrink-0 text-gray-400"
									/>
									<span className="ml-3 text-gray-200">+420 602 465 381</span>
								</dd>
							</div>
							<div className="mt-3">
								<dt className="sr-only">Email</dt>
								<dd className="flex">
									<EnvelopeIcon
										aria-hidden="true"
										className="h-6 w-6 flex-shrink-0 text-gray-400"
									/>
									<span className="ml-3 text-gray-200">servis@racing21.cz</span>
								</dd>
							</div>
						</dl>
					</div>
					<div className="w-full lg:w-2/3 mt-4 lg:mt-0 px-4 lg:px-10">
						<div className={"bg-black rounded-lg"}>
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
