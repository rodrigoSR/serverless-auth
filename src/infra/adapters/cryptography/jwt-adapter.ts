import { Encrypter, Decrypter } from "../../../data/protocols/cryptography";

import * as jwt from "jsonwebtoken";
import { injectable } from "inversify";

@injectable()
export class JwtAdapter implements Encrypter, Decrypter {
  private readonly secret = process.env.JWT_SECRET;

  async encrypt(payload: Encrypter.Params): Promise<string> {
    return jwt.sign(payload, this.secret, { expiresIn: 120 });
  }

  async decrypt(ciphertext: string): Promise<Decrypter.Result> {
    return jwt.verify(ciphertext, this.secret) as Decrypter.Result;
  }
}
