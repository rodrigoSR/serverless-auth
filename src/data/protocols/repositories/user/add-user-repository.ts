import { AddUser } from "../../../../domain/usecases";

export interface AddUserRepository {
  add: (params: AddUserRepository.Params) => Promise<AddUserRepository.Result>;
}

export namespace AddUserRepository {
  export type Params = AddUser.Params;
  export type Result = AddUser.Result;
}

export const ADDUSERREPOSITORY_TYPE = Symbol("AddUserRepository");
