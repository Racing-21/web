import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { ContactForm } from "@/components/ContactForm";

export default function ContactSection() {
	return (
		<div className="relative bg-black">
			<div className="absolute inset-0 r">
				<div className="absolute inset-y-0 left-0 w-1/2 bg-grayPrimary rounded-lg" />
			</div>

			<div className="relative mx-auto w-full">
				<div className="flex flex-col md:flex-row py-6 lg:rounded-lg bg-grayPrimary">
					<div className="w-full md:w-1/2 mb-2 md:mb-0 px-4 lg:px-10">
						<h2 className="text-2xl font-bold tracking-tight text-red-600 sm:text-3xl">
							Kontaktujte nás
						</h2>
						<dl className="mt-8 text-base text-gray-500">
							<h3 className={"text-gray-50 mb-2 text-lg"}>Adresa</h3>
							<div>
								<dt className="sr-only">Postal address</dt>
								<dd>
									<p className={"text-gray-200"}>Hájecká 47</p>
									<p className={"text-gray-200"}>Červený Újezd, 273 51</p>
								</dd>
							</div>
							<div className="mt-6">
								<dt className="sr-only">Phone number</dt>
								<dd className="flex">
									<PhoneIcon
										aria-hidden="true"
										className="h-6 w-6 flex-shrink-0 text-gray-400"
									/>
									<span className="ml-3 text-gray-200">+1 (555) 123-4567</span>
								</dd>
							</div>
							<div className="mt-3">
								<dt className="sr-only">Email</dt>
								<dd className="flex">
									<EnvelopeIcon
										aria-hidden="true"
										className="h-6 w-6 flex-shrink-0 text-gray-400"
									/>
									<span className="ml-3 text-gray-200">support@example.com</span>
								</dd>
							</div>
						</dl>
					</div>
					<div className="w-full md:w-1/2 px-4 lg:px-10">
						<div className={"bg-black rounded-lg"}>
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
