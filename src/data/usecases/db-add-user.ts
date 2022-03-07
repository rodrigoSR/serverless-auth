import { injectable, inject } from "inversify";
import {
  AddUserRepository,
  ADDUSERREPOSITORY_TYPE,
  CheckUserByEmailRepository,
  CHECKUSERBYEMAILREPOSITORY_TYPE,
  Hasher,
  HASHER_TYPE,
} from "..";
import { AddUser } from "../../domain/usecases";
import "reflect-metadata";

@injectable()
export class DbAddUser implements AddUser {
  constructor(
    @inject(ADDUSERREPOSITORY_TYPE)
    private readonly addUserRepository: AddUserRepository,
    @inject(CHECKUSERBYEMAILREPOSITORY_TYPE)
    private readonly checkUserByEmailRepository: CheckUserByEmailRepository,
    @inject(HASHER_TYPE)
    private readonly hasher: Hasher
  ) {}

  async execute(params: AddUser.Params): Promise<AddUser.Result> {
    const exists = await this.checkUserByEmailRepository.checkByEmail(
      params.email
    );

    if (!exists) {
      const hashedPassword = await this.hasher.hash(params.password);
      return await this.addUserRepository.add({
        ...params,
        password: hashedPassword,
      });
    } else {
      throw new Error("User already exists");
    }
  }
}
