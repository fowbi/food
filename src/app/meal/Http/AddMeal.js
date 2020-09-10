import { models } from "../../../config/storage";

const action = async (request, response, next) => {
  const { type, what, when, location, quantity } = request.body;

  // temp: all meals created will be attached to the seeded demo user.
  const user = await models.user.findOne({ where: { name: "demo" } });

  await models.meal.create({
    type,
    what,
    when,
    location,
    quantity,
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
