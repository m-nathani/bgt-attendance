'use strict';
module.exports = (sequelize, DataTypes) => {
  var Member = sequelize.define('Member', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [['Guard', 'Scout', 'Shaheen']], // check the value is one of these
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      }
    },
    its: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    }
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