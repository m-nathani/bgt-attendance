'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ziyarat = sequelize.define('Ziyarat', {
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    }
  }, {});
  Ziyarat.associate = function(models) {
    // associations can be defined here
    Ziyarat.belongsToMany(models.Member, {through: models.MemberZiyarat, foreignKey: 'ziyaratId'});
  };  
  return Ziyarat;
};