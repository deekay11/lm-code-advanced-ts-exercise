import { addNewUsers } from "../../../api/add_user";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";
import { getAllUsers, addUser } from "../../../../../server/src/services/users_service";
import { User } from "../../../../../server/src/types/posts.types";

export async function addUsers() {
    clear("yes");

    const name = await prompt("Enter Username of New User! ");
    const users = getAllUsers();
    const id = String(parseInt(users[users.length - 1].id) + 1); // generate new ID by incrementing the ID of the last user in the list
    const creationDate = new Date();
    printNewLine();

    print(`📨 Adding User  "${name}"...`);

    const success = await addNewUsers(name, id, creationDate);

    if (success === true) {
        // add the new user to the list of users
        const newUser: User = { id, name, creationDate };
        addUser(newUser);

        print("🥳 User Added successfully!");
    } else {
        print("😵 User NOT added.");
    }

    await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

    return states.MENU;
}

