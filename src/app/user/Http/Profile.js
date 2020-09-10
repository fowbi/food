//import moment from "moment";
//import { models, operation } from "../../../config/storage";

const action = async (request, response) => {
  return response.status(200).send(JSON.stringify({
    username: request.user.name,
    email: request.user.email,
  }));
};

export default action;
