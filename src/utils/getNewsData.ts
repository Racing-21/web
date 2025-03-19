import client from "../../tina/__generated__/client";

export const getNewsData = async () => {
	const postsResponse = await client.queries.aktualityConnection();
	return postsResponse.data.aktualityConnection.edges?.flatMap((post) => {
		return post?.node?.aktuality?.map((item) => item);
	});
};
