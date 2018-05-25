'use strict'
module.exports = (sequelize, DataTypes) => {
  var MemberGroup = sequelize.define('MemberGroup', {
    name: DataTypes.STRING
  }, {});
  MemberGroup.associate = function (models) {
    // associations can be defined here
  };
  return MemberGroup;
}