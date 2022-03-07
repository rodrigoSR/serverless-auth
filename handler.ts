import { APIGatewayEvent } from "aws-lambda";
export * from "./src/main/handlers";

export const auth = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: process.env.FAUNA_DOMAIN,
    }),
  };
};
