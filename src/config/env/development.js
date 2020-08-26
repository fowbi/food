module.exports = {
  port: process.env.PORT || 4000,
  secret: process.env.SECRET || "super.sekret.key",
  storage: {
    username: null,
    password: null,
    options: {
      dialect: "sqlite",
      storage: "data/food.sqlite",
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || "super.sekret.jwt.key",
  },
};
