export interface CheckUserByEmailRepository {
  checkByEmail: (email: string) => Promise<boolean>;
}

export const CHECKUSERBYEMAILREPOSITORY_TYPE = Symbol(
  "CheckUserByEmailRepository"
);
