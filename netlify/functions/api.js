import ServerlessHttp from "serverless-http";
import express, { Router } from "express";
import { isAuthorized } from "@tinacms/auth";
import { createMediaHandler } from "next-tinacms-cloudinary/dist/handlers";
import { publicEnv, serverEnv } from "src/utils/env";

const app = express();
const router = Router();

const mediaHandler = createMediaHandler({
	cloud_name: publicEnv.CLOUDINARY_CLOUD_NAME,
	api_key: publicEnv.CLOUDINARY_API_KEY,
	api_secret: serverEnv.CLOUDINARY_API_SECRET,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	authorized: async (req, _res) => {
		try {
			if (process.env.NODE_ENV === "development") {
				return true;
			}

			const user = await isAuthorized(req);

			return user && user.verified;
		} catch (e) {
			console.error(e);
			return false;
		}
	},
});

router.get("/cloudinary/media", mediaHandler);
router.post("/cloudinary/media", mediaHandler);
router.delete("/cloudinary/media/:media", (req, res) => {
	req.query.media = req.params.media;
	return mediaHandler(req, res);
});

app.use("/api/", router);
app.use("/.netlify/functions/api/", router);

export const handler = ServerlessHttp(app);
