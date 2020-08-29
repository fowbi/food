import passport from "passport";

const action = async (request, response, next) => {
  passport.authenticate("register", async (error, user, info) => {
    if (error) {
      console.log("error",error);
    }

    if (info !== undefined) {
      response.status(400).send(info.message);
    } else {
      response.status(200).send();
      // --- in case we want to save more to our user ---
      //request.logIn(user, err => {
      //models.user
      //.findOne({ where: { name: user.name } })
      //.then(user => {
      //user
      //.update({
      //email: data.email,
      //})
      //.then(() => {
      //response.status(200).send();
      //});
      //});
      //});
    }
  })(request, response, next);
};

export default action;
