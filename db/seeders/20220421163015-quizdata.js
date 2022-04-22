'use strict';
const path = require('path')

const { natureQuestions, natureAnswer, pandas, human, themes} = require(path.join(process.env.PWD, '../../public/quiz'))
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // await queryInterface.bulkInsert('QuizData', [{
    //   qustion: 'Цвет неба',
    //   answer: 'blue',
    //   id_themes: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // }], {});

    for (let e of themes) {
      await queryInterface.bulkInsert('Themes', [{
        title: e,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {})
    }


    // for (let el of natureQuestions) {
    //   await queryInterface.bulkInsert('QuizData', [{
    //     qustion: el,
    //     id_themes: 0++,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }], {});
    // }

    // for (let el of natureAnswer) {
    //   await queryInterface.bulkInsert('QuizData', [{
    //     answer: el,
    //     // id_themes: 0++,
    //     // createdAt: new Date(),
    //     // updatedAt: new Date(),
    //   }], {});
    // }
    

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('QuizData', null, {});
  }
};
