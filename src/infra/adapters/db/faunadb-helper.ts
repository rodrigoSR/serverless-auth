const faunadb = require("faunadb");

export const client = new faunadb.Client({
  secret: process.env.FAUNA_KEY,
  domain: process.env.FAUNA_DOMAIN,
  port: 443,
  scheme: "https",
});

export const q = faunadb.query;
