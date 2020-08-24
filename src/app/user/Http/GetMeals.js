import moment from "moment";
import { models, operation } from "../../../config/storage";

const action = async (request, response, next) => {
  const when = moment(request.params.when);
  const startDate = when.clone().startOf("day");
  const endDate = when.clone().endOf("day");

  // temp: all meals created will be attached to the seeded demo user.
  const user = await models.user.findOne({ where: { name: "demo" } });

  await models.meal.findAll({
    where: {
      user: user.id,
      when: {
        [operation.gte]: startDate.format(),
        [operation.lte]: endDate.format(),
      },
    },
    order: [
      ["when", "DESC"],
    ],
  })
    .then(function(meals) {
      response.status(200).send(meals);
    })
    .catch(function(err) {
      return next(err);
    });
};

export default action;
