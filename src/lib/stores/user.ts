import { writable } from 'svelte/store';
import type { User } from '$lib/types/types';

export const user = writable<User>();

export const setUser = (newUser: User) => {
	user.set(newUser);
};
