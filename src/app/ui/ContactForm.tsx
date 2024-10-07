"use client";

import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { Controller, Resolver, useForm } from "react-hook-form";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	company: string;
	team: string;
	selectedService: string;
	comment: string;
};

const resolver: Resolver<FormValues> = async (values) => {
	return {
		values: values.firstName ? values : {},
		errors: !values.firstName
			? {
					firstName: {
						type: "required",
						message: "This is required.",
					},
				}
			: {},
	};
};

const services = [
	{
		id: "priprava-zavodniho-vozu",
		value: "Příprava závodního vozu",
	},
	{
		id: "servis-sportovniho-vozu",
		value: "Servis sportovního vozu",
	},
];

export const ContactForm = () => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({ resolver });
	const [selectedService, setSelectedService] = useState(services[0]);

	const submitForm = async (data: FormValues) => {
		await fetch("/__forms.html", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(data).toString(),
		});
	};

	const onSubmit = handleSubmit((data) => {
		submitForm(data).catch((e) => {
			console.log(e);
		});
	});

	return (
		<div className="w-full px-6 mt-6 flex-col gap-2">
			<div className="overflow-hidden bg-grayPrimary rounded-xl py-16 sm:py-16 mt-6 gap">
				<div className="mx-auto px-6 lg:px-8">
					<form
						onSubmit={onSubmit}
						name={"contactForm"}
						data-netlify="true"
						method="POST"
						className={"grid grid-cols-2 gap-2 contact-form w-2/3 mx-auto"}
					>
						<div>
							<label
								htmlFor="firstName"
								className=" text-sm font-medium leading-6 text-gray-50"
							>
								Jméno
							</label>
							<div className="mt-1">
								<input
									{...register("firstName")}
									placeholder="Jméno"
									className="w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							{errors?.firstName && <p>{errors.firstName.message}</p>}
						</div>
						<div>
							<label
								htmlFor="lastName"
								className="w-full text-sm font-medium leading-6 text-gray-50"
							>
								Příjmení
							</label>
							<div className="mt-1">
								<input
									{...register("lastName")}
									placeholder="Příjmení"
									className="w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							{errors?.firstName && <p>{errors.firstName.message}</p>}
						</div>

						<div>
							<label
								htmlFor="company"
								className="block text-sm font-medium leading-6 text-gray-50"
							>
								Společnost
							</label>
							<div className="mt-2">
								<input
									{...register("company")}
									placeholder="Společnost"
									className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-50"
							>
								Tým
							</label>
							<div className="mt-2">
								<input
									{...register("team")}
									placeholder="Tým"
									className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							{errors?.firstName && <p>{errors.firstName.message}</p>}
						</div>

						<Controller
							control={control}
							name={"selectedService"}
							defaultValue={services[0].id}
							render={({ field: { onChange } }) => (
								<Listbox
									value={selectedService}
									onChange={(e) => {
										onChange(e);
										setSelectedService(e);
									}}
								>
									<Label className="col-span-2 block text-sm font-medium leading-6 text-gray-50">
										Služba
									</Label>
									<div className="relative col-span-2 ">
										<ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
											<span className="block truncate">
												{selectedService.value}
											</span>
											<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
												<ChevronUpDownIcon
													aria-hidden="true"
													className="h-5 w-5 text-gray-400"
												/>
											</span>
										</ListboxButton>

										<ListboxOptions
											transition
											className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
										>
											{services.map((person) => (
												<ListboxOption
													key={person.id}
													value={person}
													className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
												>
													<span className="block truncate font-normal group-data-[selected]:font-semibold">
														{person.value}
													</span>

													<span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
														<CheckIcon
															aria-hidden="true"
															className="h-5 w-5"
														/>
													</span>
												</ListboxOption>
											))}
										</ListboxOptions>
									</div>
								</Listbox>
							)}
						/>
						<div className={"col-span-2"}>
							<label
								htmlFor="company"
								className=" block text-sm font-medium leading-6 text-gray-50"
							>
								Poptávka
							</label>
							<div className="mt-2">
								<textarea
									{...register("comment")}
									placeholder="Poptávka"
									rows={4}
									className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									defaultValue={""}
								/>
							</div>
						</div>

						<div className={"col-span-2 mt-2"}>
							<input
								type="submit"
								className={
									"bg-red-600 text-gray-50 mx-auto px-3 py-3 rounded-lg font-bold"
								}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
