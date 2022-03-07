import { Container } from "inversify";

import { AddUser, Login } from "../domain/usecases";
import { DbAddUser, DbLogin } from "../data/usecases";
import {
  AddUserRepository,
  CheckUserByEmailRepository,
  FindUserByEmailRepository,
} from "../data/protocols/repositories";
import { FaunaUserAdapter } from "../infra/adapters/db";
import {
  Hasher,
  Encrypter,
  Decrypter,
  CheckPassword,
} from "../data/protocols/cryptography";
import { BcryptAdapter, JwtAdapter } from "../infra/adapters/cryptography";
import { TYPES } from "./types";

const container = new Container();

// repositories
container.bind<AddUserRepository>(TYPES.AddUserRepository).to(FaunaUserAdapter);
container
  .bind<CheckUserByEmailRepository>(TYPES.CheckUserByEmailRepository)
  .to(FaunaUserAdapter);
container
  .bind<FindUserByEmailRepository>(TYPES.FindUserByEmailRepository)
  .to(FaunaUserAdapter);

// cryptography
container.bind<Hasher>(TYPES.Hasher).to(BcryptAdapter);
container.bind<CheckPassword>(TYPES.CheckPassowrd).to(BcryptAdapter);
container.bind<Encrypter>(TYPES.Encrypter).to(JwtAdapter);
container.bind<Decrypter>(TYPES.Decrypter).to(JwtAdapter);

// usecases
container.bind<AddUser>(TYPES.AddUser).to(DbAddUser);
container.bind<Login>(TYPES.Login).to(DbLogin);

export const diContainer = container;
