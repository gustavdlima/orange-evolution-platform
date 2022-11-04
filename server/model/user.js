const mongoose = require("mongoose");
const validator = require("validator")
const Schema = mongoose.Schema;

// Defining the schema
var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isAlpha(value)) {
          throw new Error("Name must be letters");
        }
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Must be email");
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (value.lenght < 8) {
          throw new Error("password must be 8 characters long");
        }
      },
    },
  },
  {
    timestamps: true,
  }
);

// var User = mongoose.model("User", userSchema);
// const someModel = mongoose.model("User", userSchema);
module.exports = User = mongoose.model('User', userSchema);
