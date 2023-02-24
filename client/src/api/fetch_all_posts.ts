import { baseUrl } from "./base_url";

export async function fetchAllPosts() {
	try {
		const result = await fetch(baseUrl + "/api/posts/all");
		const posts = await result.json();
		return posts;
	} catch {
		return [];
	}
}
