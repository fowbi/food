import { models } from "../../../config/storage";

const action = async (request, response, next) => {
  const id = request.params.id;
  const { quantity } = request.body;

  // temp: all meals created will be attached to the seeded demo user.
  const user = await models.user.findOne({ where: { name: "demo" } });

  const meal = await models.meal.findOne({ where: { id, user: user.id } });

  if (meal === null) {
    response.status(404).send().json({ message: "Meal not found" });
    return;
  }

  await models.meal.update({ quantity }, { where: { id } })
    .then(function() {
      response.status(204).send();
    })
    .catch(function(err) {
      return next(err);
    });
};

export default action;
