import { print, prompt } from "../ui/console";
import { baseUrl } from "./base_url";

export async function sendMessageToServer(message: any) {
	try {
		const result = await fetch(baseUrl + "/api/send/", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ message: message }),
		});

		const json = await result.json();

		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
}
