"use client";

import { useForm } from "react-hook-form";
import { FormEvent } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	company: string;
	team: string;
	selectedService: string;
	quote: string;
};

const formSchema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email address"),
	phone: z.string().optional(),
	quote: z.string().min(1, "Quote is required"),
});

export const ContactForm = () => {
	const {
		register,
		formState: { errors },
	} = useForm<FormValues>({ resolver: zodResolver(formSchema) });

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const myForm = event.target as HTMLFormElement;
			const formData = new FormData(myForm);
			const res = await fetch("/forms", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(formData as never),
			});
			if (res.status === 200) {
				console.log("submitted");
			} else {
				console.log("not submitted");
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="w-full flex flex-col gap-2">
			<div className={`overflow-hidden rounded-xl py-16 sm:py-16 mt-6 gap bg-transparent`}>
				<div className="mx-auto px-6 lg:px-8">
					<form
						onSubmit={(e) => handleSubmit(e)}
						name={"contactForm"}
						data-netlify="true"
						method="post"
						className={
							"flex flex-col md:grid md:grid-cols-2 gap-2 contact-form lg:w-2/3 mx-auto"
						}
					>
						<input type="hidden" name="form-name" value="contactForm" />
						<div>
							<label
								htmlFor="firstName"
								className=" text-sm font-medium leading-6 text-gray-50"
								aria-required={true}
							>
								Jméno<span className={"text-red-600 ml-1"}>*</span>
							</label>
							<div className="mt-1">
								<input
									{...register("firstName", { required: true })}
									required
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
								Příjmení<span className={"text-red-600 ml-1"}>*</span>
							</label>
							<div className="mt-1">
								<input
									{...register("lastName", { required: true })}
									placeholder="Příjmení"
									className="w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							{errors?.lastName && <p>{errors.lastName.message}</p>}
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-50"
							>
								E-mail<span className={"text-red-600 ml-1"}>*</span>
							</label>
							<div className="mt-2">
								<input
									{...register("email", { required: true })}
									placeholder="E-mail"
									className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							{errors?.email && <p>{errors.email.message}</p>}
						</div>
						<div>
							<label
								htmlFor="phone"
								className="block text-sm font-medium leading-6 text-gray-50"
							>
								Telefon<span className={"text-red-600 ml-1"}>*</span>
							</label>
							<div className="mt-2">
								<input
									{...register("phone", { required: true })}
									type={"tel"}
									placeholder="Telefon"
									className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							{errors?.phone && <p>{errors.phone.message}</p>}
						</div>

						<div className={"col-span-2"}>
							<label
								htmlFor="quote"
								className=" block text-sm font-medium leading-6 text-gray-50"
							>
								Poptávka<span className={"text-red-600 ml-1"}>*</span>
							</label>
							<div className="mt-2">
								<textarea
									{...register("quote", { required: true })}
									placeholder="Poptávka"
									rows={4}
									className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									defaultValue={""}
								></textarea>
							</div>
						</div>

						<div className={"col-span-2 mt-2"}>
							<input
								type="submit"
								className={
									"bg-red-600 text-gray-50 mx-auto px-3 py-3 rounded-lg font-bold hover:bg-black hover:cursor-pointer active:shadow-white"
								}
								value={"Odeslat"}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
