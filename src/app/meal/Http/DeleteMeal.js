import { models } from "../../../config/storage";

const action = async (request, response, next) => {
  const id = request.params.id;

  // temp: until user management is implemented we assume the user is the demo
  // user.
  const user = await models.user.findOne({ where: { name: "demo" } });

  const meal = await models.meal.findOne({ where: { id, user: user.id } });

  if (meal === null) {
    response.status(404).send().json({ message: "Meal not found" });
    return;
  }

  await models.meal.destroy({
    where: { id }
  })
    .then(function() {
      response.status(204).send();
    })
    .catch(function(err) {
      return next(err);
    });
};

export default action;
