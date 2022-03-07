import { injectable } from "inversify";
import {
  AddUserRepository,
  CheckUserByEmailRepository,
  FindUserByEmailRepository,
} from "../../../data/protocols/repositories/user";
import { client, q } from "./faunadb-helper";
import "reflect-metadata";
import { UserModel } from "../../../domain/models";

@injectable()
export class FaunaUserAdapter
  implements
    AddUserRepository,
    CheckUserByEmailRepository,
    FindUserByEmailRepository
{
  private readonly client: any;
  private readonly q: any;

  constructor() {
    this.client = client;
    this.q = q;
  }

  async add(
    params: AddUserRepository.Params
  ): Promise<AddUserRepository.Result> {
    const { Create, Collection, Now } = this.q;
    const result = await client.query(
      Create(Collection("users"), {
        data: {
          ...params,
          lastLogin: null,
          createdAt: Now(),
        },
      })
    );

    return result.data as AddUserRepository.Result;
  }

  async checkByEmail(email: string): Promise<boolean> {
    /* const { Index, Match, Paginate } = this.q;

    const result = await this.client.query(
      Paginate(Match(Index("UserByEmail"), email))
    ); */

    return !!(await this.findByEmail(email));
  }

  async findByEmail(email: string): Promise<FindUserByEmailRepository.Result> {
    const { Let, Index, Match, Get, Select, Var, Format } = this.q;

    try {
      console.log("Buscando");
      const result = await this.client.query(
        Let(
          { userDoc: Get(Match(Index("UserByEmail"), email)) },
          {
            id: Select(["ref", "id"], Var("userDoc")),
            name: Select(["data", "name"], Var("userDoc")),
            email: Select(["data", "email"], Var("userDoc")),
            password: Select(["data", "password"], Var("userDoc")),
            createdAt: Format(
              "%t",
              Select(["data", "createdAt"], Var("userDoc"))
            ),
          }
        )
      );

      console.log(result);
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
