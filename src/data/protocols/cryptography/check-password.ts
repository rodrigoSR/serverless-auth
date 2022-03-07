export interface CheckPassword {
  check(params: CheckPassword.Params): Promise<boolean>;
}

export namespace CheckPassword {
  export type Params = {
    password: string;
    hash: string;
  };
}

export const CHECKPASSWORD_TYPE = Symbol("CheckPassword");
