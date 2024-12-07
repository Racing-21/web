import { google } from "googleapis";

export async function GET(request) {
	try {
		// Load the service account credentials
		const credentials = JSON.parse(
			process.env.GOOGLE_SERVICE_ACCOUNT_KEY.toString().replace(/\n/g, ""),
		);

		if (credentials !== undefined) {
			// Authenticate with Google Sheets API
			const auth = new google.auth.GoogleAuth({
				credentials,
				scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
			});

			const sheets = google.sheets({ version: "v4", auth });

			const url = new URL(request.url);

			// Define your spreadsheet ID and range
			const spreadsheetId = url.searchParams.get("spreadsheetId");

			// Fetch data from Google Sheets
			const response = await sheets.spreadsheets.values.get({
				spreadsheetId,
				range: "rankings!A1:P50",
			});

			const rows = response.data.values;

			if (!rows || rows.length === 0) {
				return new Response(JSON.stringify({ message: "No data found" }), {
					status: 404,
				});
			}

			return new Response(JSON.stringify({ data: rows }), { status: 200 });
		} else {
			return new Response(JSON.stringify({ message: "No credentials provided" }), {
				status: 401,
			});
		}
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		});
	}
}
