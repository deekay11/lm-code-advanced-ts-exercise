import { baseUrl } from "./base_url";

export async function fetchAllUsers() {
	try {
		const result = await fetch(baseUrl + "/api/users/all");
		const users = await result.json();
		return users;
	} catch {
		return [];
	}
}
