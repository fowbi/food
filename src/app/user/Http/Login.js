import passport from "passport";
import jwt from "jsonwebtoken";
import config from "../../../config";
import { models } from "../../../config/storage";

const action = async (request, response, next) => {
  passport.authenticate("login", (error, user, info) => {
    if (error) {
      response.status(401).send();
      return;
    }

    if (info !== undefined) {
      response.status(400).send(info.message);
    } else {
      request.logIn(user, () => {
        models.user
          .findOne({ where: { name: user.name } })
          .then(user => {
            const token = jwt.sign(
              { id: user.id, name: user.name },
              config.jwt.secret,
              { expiresIn: 60 }
            );

            response.setHeader("x-auth-token", token);
            return response.status(200).send(JSON.stringify(user));
          });
      });
    }
  })(request, response, next);
};

export default action;
