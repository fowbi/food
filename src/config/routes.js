import mealRoutes from "../app/meal/route";

const routeConfig = function (app) {
  app.use("/meal", mealRoutes);

  app.use((error, request, response, next) => {
    if (error.message && (~error.message.indexOf("not found") || ~error.message.indexOf("Cast to ObjectId failed"))) {
      return next();
    }

    console.error(error.stack);
    response.status(500).json({ error: error.stack });
  });

  app.use((request, response) => {
    response.status(404).json({ message: "Not found" });
  });
};

export default routeConfig;
