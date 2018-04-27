module.exports = function(sequelize, DataTypes) {
    var Interest = sequelize.define("Interest", {
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
      }
    });

    return Interest;
    
    Interest.sync();
  };
  