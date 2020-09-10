import passport from "passport";
import jwt from "jsonwebtoken";

export const authMiddleware = (request, response, next) => {
  passport.authenticate("jwt", { session: false }, (error, user, info) => {
    if (error) {
      console.log(error);
    }

    if (info !== undefined) {
      if (info instanceof jwt.TokenExpiredError) {
        response.status(401).send(info.message);
        return;
      }
      response.send(info.message);
    } else {
      request.user = user;
      next();
    }
  })(request, response, next);
};
