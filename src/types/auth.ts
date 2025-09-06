import { User } from ".";

export type AuthState = {
    user: User | null;
    loading: boolean;
};
