const { ObjectID } = require("bson");
const { resolve } = require("promise");
const db = require("../config/connection");

module.exports = {
  ValidateUser: (userDetails) => {
    return new Promise(async (resolve, reject) => {
      let user = await db
        .get()
        .collection("users")
        .findOne({ email: userDetails.email });

      if (user) {
        if (((user.password).trim()) == userDetails.password) resolve("login successful");
        else resolve("incorrect password");
      } else {
        resolve("invalid username or password");
      }
    });
  },
};
