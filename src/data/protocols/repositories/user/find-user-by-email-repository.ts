import { UserModel } from "../../../../domain/models";

export interface FindUserByEmailRepository {
  findByEmail(email: string): Promise<FindUserByEmailRepository.Result>;
}

export namespace FindUserByEmailRepository {
  export type Result = UserModel | null;
}

export const FINDUSERBYEMAILREPOSITORY_TYPE = Symbol(
  "FindUserByEmailRepository"
);
