import { createDatabase, createLocalDatabase } from "@tinacms/datalayer";
import { GitHubProvider } from "tinacms-gitprovider-github";
import { MongodbLevel } from "mongodb-level";

const branch =
	process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
let db = null;
if (isLocal) {
	db = createLocalDatabase();
} else {
	if (
		!process.env.GITHUB_OWNER ||
		!process.env.GITHUB_REPO ||
		!process.env.GITHUB_PERSONAL_ACCESS_TOKEN ||
		!process.env.MONGODB_URI
	) {
		throw new Error("env file is missing needed variables");
	} else {
		db = createDatabase({
			gitProvider: new GitHubProvider({
				branch,
				owner: process.env.GITHUB_OWNER,
				repo: process.env.GITHUB_REPO,
				token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
			}),
			databaseAdapter: new MongodbLevel({
				collectionName: "tinacms",
				dbName: "tinacms",
				mongoUri: process.env.MONGODB_URI,
			}),
			namespace: branch,
		});
	}
}

export default db;
