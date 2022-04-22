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
    static associate({Themes}) {
      QuizData.belongsTo(Themes, {foreignKey:'id_themes'});

      
    }
  }
  QuizData.init({
    qustion: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    id_themes: {
      type: DataTypes.INTEGER,
      references: {
        model: "Themes",
        id: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'QuizData',
  });
  return QuizData;
};
