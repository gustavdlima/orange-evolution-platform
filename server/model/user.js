const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
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

//password hashing schema-middleware on mongoose before saving password
userSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(8, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

module.exports = User = mongoose.model("User", userSchema);
