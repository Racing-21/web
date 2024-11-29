"use client";

import { HomeIcon } from "@heroicons/react/16/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Breadcrumbs = () => {
	const pathname = usePathname();
	const segments = pathname?.split("/").filter((item) => item !== "");

	return (
		<nav aria-label="Breadcrumb" className="flex">
			<ol role="list" className="flex items-center space-x-4">
				<li>
					<div>
						<a href="/" className="text-gray-400 hover:text-gray-500">
							<HomeIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
							<span className="sr-only">Home</span>
						</a>
					</div>
				</li>
				{segments?.map((page, index) =>
					index === 0 || index === segments.length - 1 ? null : (
						<li key={page}>
							<div className="flex items-center">
								<svg
									fill="currentColor"
									viewBox="0 0 20 20"
									aria-hidden="true"
									className="h-5 w-5 flex-shrink-0 text-gray-300"
								>
									<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
								</svg>
								<Link
									href={`/${segments.slice(0, index + 1).join("/")}`}
									aria-label={`Go to ${page.toLocaleUpperCase()}`}
									className="md:ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
								>
									{page.toLocaleUpperCase().replace("-", " ")}
								</Link>
							</div>
						</li>
					),
				)}
			</ol>
		</nav>
	);
};
