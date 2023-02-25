import { states } from "../states/states";
import { clear, print, printNewLine, prompt } from "../ui/console";

export async function showMenu() {
	clear("no");
	print("0. Send Server Message", false);
	print("1. Show all posts", false);
	print("2. Show all users", false);
	print("3. Browse posts", false);
	print("4. Add new user", false);
	print("5. Add new post", false);
	print("6. Exit Program");
	printNewLine();

	const result = await prompt("What shall we do? ");

	if (result === "0") return states.SEND_MESSAGE;
	if (result === "1") return states.SHOW_POSTS;
	if (result === "2") return states.SHOW_USERS;
	if (result === "3") return states.BROWSE_POSTS;
	if (result === "4") return states.ADD_USER;
	if (result === "5") return states.ADD_POST;
	if (result === "6") return states.EXIT;

	return states.UNKNOWN;
}
