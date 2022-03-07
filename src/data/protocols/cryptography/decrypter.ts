import { UserModel } from "../../../domain/models";

export interface Decrypter {
  decrypt(data: string): Promise<Decrypter.Result>;
}

export namespace Decrypter {
  export type Result = Omit<UserModel, "password">;
}

export const DECRYPTER_TYPE = Symbol("Decrypter");
