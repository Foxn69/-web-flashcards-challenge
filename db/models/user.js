'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    nick_name: DataTypes.TEXT,
    mistakes: DataTypes.INTEGER,
    correct_answers: DataTypes.INTEGER,
    total_plays: DataTypes.INTEGER,
    total_scores: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};