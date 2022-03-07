export interface Hasher {
  hash: (text: string) => Promise<string>;
}

export const HASHER_TYPE = Symbol("Hasher");
