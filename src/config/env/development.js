module.exports = {
  port: process.env.PORT || 4000,
  secret: process.env.SECRET || "super.sekret.key",
  storage: {
    username: null,
    password: null,
    options: {
      dialect: "sqlite",
      storage: "data/food.sqlite",
      //logging: ( queryString, queryObject ) => {
        //console.log( queryString );      // outputs a string
        //console.log( queryObject.bind ); // outputs an array
      //}
    },
  },
};
