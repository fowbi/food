import Meal from "../../../models/meal";
import User from "../../../models/user";

const action = async (request, response, next) => {
  const { type, what, when, location } = request.body;

  // temp: all meals created will be attached to the seeded demo user.
  const user = await User.findOne({ where: { name: "demo" } });

  await Meal.create({
    type,
    what,
    when,
    location,
    user: user.id,
  })
    .then(function(meal) {
      console.log("success", meal.toJSON());
      response.status(204).send();
    })
    .catch(function(err) {
      return next(err);
    });
};

export default action;
