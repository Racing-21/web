"use client";

import React, { useEffect, useState } from "react";

// Add Cloudinary type definition to Window interface
declare global {
	interface Window {
		cloudinary?: {
			createMediaLibrary: (
				options: typeof mediaLibraryOptions,
				callbacks: {
					insertHandler: (data: { assets: { secure_url: string }[] }) => void;
				},
				container: string,
			) => {
				show: () => void;
			};
		};
	}
}

const CLOUDINARY_URL = "https://media-library.cloudinary.com/global/all.js";

const mediaLibraryOptions = {
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	multiple: true,
	max_files: 20,
	api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
};

interface BulkImageSelectorProps {
	input: {
		value: string[];
		onChange: (value: string[]) => void;
	};
	field: {
		name: string;
		label?: string;
	};
}

export const BulkImageSelector = ({ input }: BulkImageSelectorProps) => {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		// If widget already exists, set ready
		if (typeof window !== "undefined" && window.cloudinary) {
			setIsReady(true);
			return;
		}

		// Load Cloudinary widget script dynamically
		const script = document.createElement("script");
		script.src = CLOUDINARY_URL;
		script.async = true;
		script.onload = () => {
			if (window.cloudinary) {
				setIsReady(true);
			}
		};
		document.body.appendChild(script);
	}, []);

	const openMediaLibrary = () => {
		if (!isReady || !window.cloudinary) return;

		const ml = window.cloudinary.createMediaLibrary(
			mediaLibraryOptions,
			{
				insertHandler: (data: { assets: { secure_url: string }[] }) => {
					const selected = data.assets.map((asset) => asset.secure_url);
					input.onChange([...(input.value || []), ...selected]);
				},
			},
			"#ml-container",
		);

		ml.show();
	};

	return (
		<div>
			<button
				type="button"
				onClick={openMediaLibrary}
				disabled={!isReady}
				className={`px-4 py-2 rounded shadow ${
					isReady ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
				}`}
			>
				{isReady ? "Select Multiple Images from Cloudinary" : "Loading Media Library..."}
			</button>

			<div className="grid grid-cols-3 gap-4 mt-4">
				{(input.value || []).map((img: string, i: number) => (
					<div key={i}>
						<img src={img} alt={img} className="rounded shadow" />
						<p className="text-xs mt-1 text-gray-600">{img}</p>
					</div>
				))}
			</div>

			<div id="ml-container" />
		</div>
	);
};
