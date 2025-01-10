import { google } from "googleapis";

exports.handler = async (event) => {
	try {
		// Load the service account credentials
		const credentials = JSON.parse(
			process.env.GOOGLE_SERVICE_ACCOUNT_KEY.toString().replace(/\n/g, ""),
		);

		if (credentials) {
			// Authenticate with Google Sheets API
			const auth = new google.auth.GoogleAuth({
				credentials,
				scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
			});

			const sheets = google.sheets({ version: "v4", auth });

			// Parse query parameters from the event
			const spreadsheetId = event.queryStringParameters.spreadsheetId;

			if (!spreadsheetId) {
				return {
					statusCode: 400,
					body: JSON.stringify({ message: "Missing spreadsheetId parameter" }),
				};
			}

			// Fetch data from Google Sheets
			const response = await sheets.spreadsheets.values.get({
				spreadsheetId,
				range: "rankings!A1:P50",
			});

			const rows = response.data.values;

			if (!rows || rows.length === 0) {
				return {
					statusCode: 404,
					body: JSON.stringify({ message: "No data found" }),
				};
			}

			return {
				statusCode: 200,
				body: JSON.stringify({ data: rows }),
			};
		} else {
			return {
				statusCode: 401,
				body: JSON.stringify({ message: "No credentials provided" }),
			};
		}
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: error.message }),
		};
	}
};
