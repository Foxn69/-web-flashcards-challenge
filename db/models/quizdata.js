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
    static associate() {
      // QuizData.belongsTo(Themes, {foreignKey:'themes_id'});
    }
  }
  QuizData.init({
    qustion: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    id_themes: {
      type: DataTypes.INTEGER,
      references: {
        model: "Themes",
        id: 'id_themes'
      }
    }
  }, {
    sequelize,
    modelName: 'QuizData',
  });
  return QuizData;
};
