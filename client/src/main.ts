import { exit } from "./exit/exit";
import { showMenu } from "./menu/menu";
import { browsePosts } from "./menu/options/browse_posts/browse_posts";
import { sendMessage } from "./menu/options/send_message/send_message";
import { showAllPosts } from "./menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "./menu/options/show_all_users/show_all_users";
import { addUsers } from "./menu/options/add_user/add_user";
import { addPost } from "./menu/options/add_post/add_post";
import { states } from "./states/states";
import { clear, print, prompt } from "./ui/console";
async function main() {
	// For Ctrl+C, the process will receive the SIGINT signal and 
	//trigger the exit() function to cleanly terminate the application.
	process.on("SIGINT", () => {
		exit(0);
	});
	const stateFunctions = {
		[states.MENU]: async () => {
			const newMenuOption = await showMenu();
			return newMenuOption;
		},
		[states.SEND_MESSAGE]: async () => {
			const nextState = await sendMessage();
			return nextState;
		},
		[states.SHOW_POSTS]: async () => {
			clear("no");
			const posts = await showAllPosts();
			return states.MENU;
		},
		[states.SHOW_USERS]: async () => {
			clear("no");
			const users = await showAllUsers();
			return states.MENU;
		},
		[states.BROWSE_POSTS]: async () => {
			clear("no");
			const post = await browsePosts();
			return states.MENU;
		},
		[states.ADD_USER]: async () => {
			clear("no");
			const user = await addUsers();
			return states.MENU;
		},
		[states.ADD_POST]: async () => {
			clear("no");
			const addpost = await addPost();
			return states.MENU;
		},
		[states.UNKNOWN]: async () => {
			clear("no");

			print("😵 We have entered an unknown state.");
			await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
			return states.MENU;
		},
	};
	let currentState = states.MENU;
	while (true) {
		const nextState = await stateFunctions[currentState]();
		if (!Object.values(states).includes(nextState)) {
			currentState = states.UNKNOWN;
			console.error(`Invalid next state: ${nextState}`);
		} else {
			currentState = nextState;
		}

		if (currentState === states.EXIT) {
			exit(0);
		}
	}
}
main();