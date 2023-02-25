import { Post } from "../types/posts.types";
import { getAllUsers } from "./users_service";

const post: Post[] = [
	{
		id: "1",
		title: "The Best Day of My Life",
		text: "I went to the zoo and I saw a giraffe! It was very big.",
		author: getAllUsers()[0], // this should look suspicious...
	},
	{
		id: "2",
		title: "Minutes of Our Recent Meeting",
		text: "Incentivize adoption exposing new ways to evolve our design language criticality . Can we align on lunch orders please advise soonest, for strategic staircase, so show pony, but run it up the flagpole. Big picture we have to leverage up the messaging, but proceduralize fast track , nor technologically savvy, can you put it on my calendar?. Paddle on both sides. High-level our competitors are jumping the shark, and today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud turn the crank, canatics exploratory investigation data masking, so root-and-branch review. Quick win we want to empower the team with the right tools and guidance to uplevel our craft and build better first-order optimal strategies, yet corporate synergy. Curate form without content style without meaning, strategic staircase one-sheet, and green technology and climate change , or onward and upward, productize the deliverables and focus on the bottom line. Marginalised key performance indicators crank this out.",
		author: getAllUsers()[1], // 😬 doing it again..!
	},
	{
		id: "3",
		title: "The Worst Day of My Life",
		text: "I went to the zoo and the giraffes were asleep. Then I dropped my ice cream.",
		author: getAllUsers()[2], // 🤢 accessing arrays that aren't *guaranteed* to have these numbers in!
	},
];

export function getAllPost(): Post[] {
	return post;
}

export function addPost(posts: Post): boolean {
	post.push(posts);
	return true;
}