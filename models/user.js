// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Name cannot be null
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Username cannot be null, must be greater than 5 characters
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 30]
      }
    },
    // Location cannot be null
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  //Associate User with interests
  User.associate = function(models) {
    // Associating User with Interests
    // When a User is deleted, also delete any associated Interests
    User.hasMany(models.Interest, {
      onDelete: "cascade"
    });

    // User.hasMany(models.Meetup, {
    //   onDelete: "cascade"
    // });
  };
  return User;
  // User.sync();
};
