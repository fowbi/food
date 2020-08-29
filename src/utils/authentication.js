import passport from "passport";

export const authMiddleware = (request, response, next) => {
  passport.authenticate("jwt", { session: false }, (error, user, info) => {
    if (error) {
      console.log(error);
    }

    if (info !== undefined) {
      response.send(info.message);
    } else {
      next();
    }
  })(request, response, next);
};
