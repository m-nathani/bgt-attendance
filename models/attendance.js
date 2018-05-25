'use strict';
module.exports = (sequelize, DataTypes) => {
  var Attendance = sequelize.define('Attendance', {
    attendanceDate: DataTypes.DATE
  }, {});
  Attendance.associate = function(models) {
    // associations can be defined here
  };
  return Attendance;
};