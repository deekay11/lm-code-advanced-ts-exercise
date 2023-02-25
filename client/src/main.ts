// main.ts

import { exit } from "./exit/exit";
import { showMenu } from "./menu/menu";
import { browsePosts } from "./menu/options/browse_posts/browse_posts";
import { sendMessage } from "./menu/options/send_message/send_message";
import { showAllPosts } from "./menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "./menu/options/show_all_users/show_all_users";
import { addUsers } from "./menu/options/add_user/add_user";
import { addPost } from "./menu/options/add_post/add_post";
import { State } from "./states/state";
import { states } from "./states/states";
import { clear, print, printNewLine, prompt } from "./ui/console";

async function begin() {
	clear("yes");
	print("👋 Welcome to our cool blog browser!");
	await prompt("⌨️ Press [ENTER] to continue! 🕶️");
	main();
}

async function main() {
	const stateFunctions = {
		[states.MENU]: showMenu,
		[states.SEND_MESSAGE]: sendMessage,
		[states.SHOW_POSTS]: showAllPosts,
		[states.SHOW_USERS]: showAllUsers,
		[states.BROWSE_POSTS]: browsePosts,
		[states.ADD_USER]: addUsers,
		[states.ADD_POST]: addPost,
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
		} else {
			currentState = nextState;
		}

		if (currentState === states.EXIT) {
			exit(0);
		}
	}
}

begin();
