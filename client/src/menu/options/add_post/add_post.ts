import { addNewUsers } from "../../../api/add_user";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";
import { addNewPost } from "../../../api/add_post";
import { getAllUsers, getUserById } from "../../../../../server/src/services/users_service";
import { User } from "../../../../../server/src/types/posts.types";

export async function addPost() {
    clear("yes");

    let id: string;
    function validateNumberInput(input: string): boolean {
        return /^[0-9]+$/.test(input);
    }

    do {
        clear("yes");
        id = await prompt("Enter ID of New Post (numbers only) : "); //user only enter ID as number
    } while (!validateNumberInput(id));

    const title = await prompt("Enter Title of New Post: ");
    const text = await prompt("Enter Text of New Post: ");
    const users = getAllUsers();

    let authorId: string;
    let author: User | undefined;
    while (true) {
        authorId = await prompt("Enter Author ID: ");

        console.log("authorId:", authorId);
        console.log("users:", users);

        author = getUserById(authorId, users);

        if (!author) {
            print("😵 Invalid Author ID!");
            console.log("Select Author IDs from above list!!");
        } else {
            break;
        }
    }


    printNewLine();
    print(`📨 Adding Post "${title}" with Post ID "${id}" and Author "${author.name}"...`);

    const success = await addNewPost(id, title, text, author);

    if (success === true) print("🥳 Post Added successfully!");
    else print("😵 Post NOT added.");

    await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

    return states.MENU;
}
