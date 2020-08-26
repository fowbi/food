import bcrypt from "bcrypt";
import config from "./../config/";
import { models } from "../config/storage";

const BCRYPT_SALT_ROUNDS = 12;

const passport = require("passport"),
  localStrategy = require("passport-local").Strategy,
  JWTstrategy = require("passport-jwt").Strategy,
  ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
  "register",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false,
    },
    (username, password, done) => {
      try {
        models.user.findOne({
          where: {
            name: username,
          }
        }).then(user => {
          if (user !== null) {
            return done(null, false, "username is already taken");
          } else {
            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
              models.user.create({ name: username, pass: hashedPassword }).then(user => {
                return done(null, user);
              });
            });
          }
        });
      } catch (error) {
        done(error);
      }
    },
  ),
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false,
    },
    (username, password, done) => {
      try {
        models.user.findOne({
          where: {
            name: username,
          }
        }).then(user => {
          if (user !== null) {
            return done(null, false);
          } else {
            bcrypt.compare(password, user.pass).then(response => {
              if (response !== true) {
                return done(null, false);
              }

              return done(null, user);
            });
          }
        });
      } catch (error) {
        done(error);
      }
    },
  ),
);

const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: config.jwt.secret,
};

passport.use(
  "jwt",
  new JWTstrategy(
    options,
    (jwtPayload, done) => {
      try {
        models.user.findOne({
          where: {
            id: jwtPayload.id,
          }
        }).then(user => {
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        });
      } catch (error) {
        done(error);
      }
    },
  ),
);
