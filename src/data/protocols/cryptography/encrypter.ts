import { UserModel } from "../../../domain/models";

export interface Encrypter {
  encrypt(data: Encrypter.Params): Promise<string>;
}

export namespace Encrypter {
  export type Params = Omit<UserModel, "password">;
}

export const ENCRYPTER_TYPE = Symbol("Encrypter");
