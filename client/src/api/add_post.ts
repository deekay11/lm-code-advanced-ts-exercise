import { Post, User } from "../../../server/src/types/posts.types";
import { print, prompt } from "../ui/console";
import { baseUrl } from "./base_url";
import { getUserById } from "../../../server/src/services/users_service";

export async function addNewPost(id: string, title: string, text: string, author: User) {
    try {
        const result = await fetch(baseUrl + "/api/posts/add", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                id: id,
                text: text,
                title: title,
                authorId: author.id,
            }),
        });

        const json = await result.json();

        const { success } = json;

        return success;
    } catch (e) {
        console.error(e);
        return false;
    }
}
