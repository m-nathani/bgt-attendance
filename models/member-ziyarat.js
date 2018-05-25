'use strict'
module.exports = (sequelize, DataTypes) => {
  var MemberZiyarat = sequelize.define('MemberZiyarat', {
    ziyaratDate: DataTypes.DATE
  }, {});
  MemberZiyarat.associate = function (models) {
    // association goes here
  };
  return MemberZiyarat;
}