'use strict'
module.exports = (sequelize, DataTypes) => {
  var MemberGroup = sequelize.define('MemberGroup', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    }
  }, {});
  MemberGroup.associate = function (models) {
    // associations can be defined here
  };
  return MemberGroup;
}