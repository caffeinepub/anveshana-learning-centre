import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    id: bigint;
    name: string;
    message: string;
    gradeLevel: GradeLevel;
    phone: string;
}
export interface UserProfile {
    name: string;
}
export enum GradeLevel {
    tenth = "tenth",
    eighth = "eighth",
    seventh = "seventh",
    ninth = "ninth"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteEnquiry(id: bigint): Promise<void>;
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitEnquiry(name: string, gradeLevel: GradeLevel, phone: string, message: string): Promise<void>;
}
