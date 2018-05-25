'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
     },
    eventDate: {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
     }
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsToMany(models.Member, {through: models.Attendance, foreignKey: 'eventId'});    
  };
  return Event;
};