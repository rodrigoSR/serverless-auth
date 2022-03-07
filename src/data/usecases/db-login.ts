import { inject, injectable } from "inversify";
import {
  Encrypter,
  ENCRYPTER_TYPE,
  FindUserByEmailRepository,
  FINDUSERBYEMAILREPOSITORY_TYPE,
} from "..";
import { UserModel } from "../../domain/models";
import { Login } from "../../domain/usecases/login";
import {
  CheckPassword,
  CHECKPASSWORD_TYPE,
} from "../protocols/cryptography/check-password";

@injectable()
export class DbLogin implements Login {
  constructor(
    @inject(CHECKPASSWORD_TYPE)
    private readonly checkPassword: CheckPassword,
    @inject(ENCRYPTER_TYPE)
    private readonly encrypter: Encrypter,
    @inject(FINDUSERBYEMAILREPOSITORY_TYPE)
    private readonly findUserByEmail: FindUserByEmailRepository
  ) {}

  async execute({ email, password }: Login.Params): Promise<Login.Result> {
    const user = await this.findUserByEmail.findByEmail(email);

    if (user) {
      const { password: hash, ...payload } = user;

      const valid = await this.checkPassword.check({
        password,
        hash,
      });

      if (!valid) {
        throw new Error("User Notfound");
      }

      const accessToken = await this.encrypter.encrypt(payload);
      return {
        accessToken,
      };
    }

    throw new Error("User Notfound");
  }
}
