import { User } from "../types/posts.types";

const users: User[] = [
	{
		id: "1",
		name: "Spicy Hotfish",
		creationDate: new Date(),
	},
	{
		id: "2",
		name: "Sally-Anne Writerperson",
		creationDate: new Date(),
	},
	{
		id: "3",
		name: "Jimmy Alias",
		creationDate: new Date(),
	},
	{
		id: "4",
		name: 'Steve "The Hoop" Hooper',
		creationDate: new Date(),
	},
];

export function getAllUsers(): User[] {
	return users;
}

export function addUser(user: User): User[] {
	users.push(user);
	return users;
}
export function getUserById(id: string, users: User[]): User | undefined {
	return users.find((user) => user.id === id);
}

