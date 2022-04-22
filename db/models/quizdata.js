'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuizData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QuizData.init({
    qustion: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    id_themes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QuizData',
  });
  return QuizData;
};