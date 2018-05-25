'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rank = sequelize.define('Rank', {
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    }
}, {});
  Rank.associate = function(models) {
    // associations can be defined here
  };
  return Rank;
};