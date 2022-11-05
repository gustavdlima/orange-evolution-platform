const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const schema = mongoose.Schema;

// Defining the schema
var userSchema = new schema(
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

userSchema.methods.removeSensitiveUserFields = async function () {
  const user = this;

  // clonar o objeto
  const userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user.email) {
    throw new Error("incorrect email or password");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("incorrect email or password");
  }

  return user.removeSensitiveUserFields();
};

module.exports = User = mongoose.model("User", userSchema);
