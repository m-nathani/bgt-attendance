'use strict';
module.exports = (sequelize, DataTypes) => {
  var Member = sequelize.define('Member', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    phone: DataTypes.STRING,
    its: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    email: DataTypes.STRING
  }, {});

  Member.associate = function(models) {
    // associations can be defined here
    Member.belongsToMany(models.Ziyarat, {through: models.MemberZiyarat, foreignKey: 'memberId'});
    Member.belongsToMany(models.Event, {through: models.Attendance, foreignKey: 'memberId'});
    Member.belongsTo(models.MemberGroup, { foreignKey: 'memberGroupId' });
    Member.belongsTo(models.Rank, { foreignKey: 'rankId' });
  };

  return Member;
};