import { UserModel } from "../models/user";

export interface AddUser {
  execute: (params: AddUser.Params) => Promise<AddUser.Result>;
}

export namespace AddUser {
  export type Params = Omit<UserModel, "createdAt" | "lastLogin">;
  export type Result = UserModel;
}

export const ADDUSER_TYPE = Symbol("AddUser");
