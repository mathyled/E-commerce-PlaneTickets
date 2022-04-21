const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { UserModel } = require("../models");
const CryptoJS = require("crypto-js");
const { deserializeUser } = require("passport");
require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      const newUser = {
        username: profile.displayName,
        email: profile.emails[0].value,
        status: "Active",
        photo: profile.photos[0].value,
        accessToken: accessToken,
      };
      console.log(newUser);
      try {
        let user = await UserModel.findOne({ email: newUser.email });
        if (user) {
          user.photo = newUser.photo;
          done(null, user);
          console.log("User already exists");
        } else {
          user = await UserModel.create(newUser);
          done(null, user);
          console.log("User created");
        }
      } catch (err) {
        console.error(err);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserModel.findById(id, (err, user) => {
    done(null, user);
  });
});
