export interface Login {
  execute: (params: Login.Params) => Promise<Login.Result>;
}

export namespace Login {
  export type Params = {
    email: string;
    password: string;
  };
  export type Result = {
    accessToken: string;
  };
}

export const LOGIN_TYPE = Symbol("Login");
