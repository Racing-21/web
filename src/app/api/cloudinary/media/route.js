import { createMediaHandler, mediaHandlerConfig } from "next-tinacms-cloudinary/dist/handlers";
import { isAuthorized } from "@tinacms/auth";

export const config = mediaHandlerConfig;

const mediaHandler = createMediaHandler({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	authorized: async (req) => {
		try {
			const user = await isAuthorized(req);
			return user && user.verified;
		} catch (e) {
			console.error(e);
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

export async function DELETE(request, { params }) {
	request.query = { media: ["media", params.media] };
	return mediaHandler(request);
}
