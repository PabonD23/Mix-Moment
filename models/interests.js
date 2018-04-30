module.exports = function(sequelize, DataTypes) {
    var Interest = sequelize.define("Interest", {
      // Name cannot be null
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      outdoor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      fitness: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      photography: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      dance: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      culture: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      technology: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      gaming: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      travel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      food: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      books: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      fashion: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      family: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      social: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      music: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      pets: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      career: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
    });

    return Interest;
  };
  