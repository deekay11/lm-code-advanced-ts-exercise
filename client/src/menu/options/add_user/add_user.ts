import { addNewUsers } from "../../../api/add_user";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";
import { getAllUsers, addUser } from "../../../../../server/src/services/users_service";

export async function addUsers() {
    clear("yes");

    const name = await prompt("Enter Username of New User! ");
    const id = (getAllUsers()).toString();
    const creationDate = new Date();
    printNewLine();

    print(`📨 Adding User  "${name}"...`);

    const success = await addNewUsers(name, id, creationDate);


    if (success === true) print("🥳 User Added successfully!");
    else print("😵 User NOT added.");

    await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

    return states.MENU;
}
