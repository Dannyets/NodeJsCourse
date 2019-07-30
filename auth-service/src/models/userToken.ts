import { UserRole } from "@bit/dannyets.infrastructure.models";

export interface UserToken {
    email: string;
    roles: UserRole[];
}
