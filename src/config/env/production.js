module.exports = {
  port: process.env.PORT || 4000,
  secret: process.env.SECRET || "super.sekret.key",
  storage: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    options: {
      dialect: "mysql",
      host: process.env.DB_HOST || "localhost",
      database: process.env.DB_NAME || "food",
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || "super.sekret.jwt.key",
  },
};
