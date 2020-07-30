module.exports = {
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || "super.sekret.key",
  storage: {
    username: null,
    password: null,
    options: {
      dialect: "sqlite",
      storage: "data/food.sqlite",
    },
  },
};
