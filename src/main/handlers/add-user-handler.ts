import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { AddUser } from "../../domain/usecases";
import { diContainer } from "../inversify-config";
import { TYPES } from "../types";

export const addUserHandler = async (
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
  const { id, name, email, password } = JSON.parse(event.body);
  const params: AddUser.Params = { id, name, email, password };
  const addUser: AddUser = diContainer.get<AddUser>(TYPES.AddUser);
  const user = await addUser.execute(params);
  return {
    statusCode: 201,
    body: JSON.stringify(user),
  };
};
