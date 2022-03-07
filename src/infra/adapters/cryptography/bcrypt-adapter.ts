import * as bcrypt from "bcrypt";
import { injectable } from "inversify";
import { Hasher, CheckPassword } from "../../../data/protocols/cryptography";
import "reflect-metadata";

@injectable()
export class BcryptAdapter implements Hasher, CheckPassword {
  check({ password, hash }: CheckPassword.Params): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  hash(text: string): Promise<string> {
    return bcrypt.hash(text, 10);
  }
}
