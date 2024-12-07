import { createMediaHandler } from "next-tinacms-cloudinary/dist/handlers";
import { isAuthorized } from "@tinacms/auth";

const mediaHandler = createMediaHandler({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	authorized: async (req) => {
		try {
			console.log(req);
			if (process.env.NODE_ENV === "development") {
				return true; // Allow all users in development
			}

			const user = await isAuthorized(req); // TinaCMS authorization
			return user && user.verified; // Allow if the user is verified
		} catch (error) {
			console.error("Authorization error:", error);
			return false;
		}
	},
});

export async function GET(request) {
	return mediaHandler(request);
}

export async function POST(request) {
	return mediaHandler(request);
}

export async function DELETE(request) {
	return mediaHandler(request);
}
