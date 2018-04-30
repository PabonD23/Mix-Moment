module.exports = function(sequelize, DataTypes) {
  var Meetup = sequelize.define("Meetup", {
    // Giving the Meetup model a name of type STRING
    event_title: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    event_date: DataTypes.STRING

  });

  // Meetup.associate = function(models) {
  //   // Associating Meetup with User
  // //   // When an Meetup is deleted, also delete any associated Meetups
  // //   Meetup.belongsTo(models.User,
  // //     {
  // //     onDelete: "cascade"
  // //   });
  // // };

  return Meetup;
};
