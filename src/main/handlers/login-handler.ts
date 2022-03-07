import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { Login } from "../../domain/usecases";
import { diContainer } from "../inversify-config";
import { TYPES } from "../types";

export const loginHandler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Request body is missing",
      }),
    };
  }
  const { email, password } = JSON.parse(event.body);
  const params: Login.Params = { email, password };
  const login: Login = diContainer.get<Login>(TYPES.Login);
  const loginResult = await login.execute(params);
  return {
    statusCode: 201,
    body: JSON.stringify(loginResult),
  };
};
