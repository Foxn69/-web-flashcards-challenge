'use strict';
const path = require('path')

const { nature, pandas, human, themes} = require(path.join(process.env.PWD, 'quiz'))
module.exports = {
  async up(queryInterface, Sequelize) {
    
    // for (let e of themes) {
    //   await queryInterface.bulkInsert('Themes', [{
    //     title: e,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }], {})
    // }


    // for (let el of nature) {
    //   await queryInterface.bulkInsert('QuizData', [{
    //     qustion: el[0],
    //     answer: el[1],
    //     id_themes: 1,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }], {});
    // }

    // for (let el of pandas) {
    //   await queryInterface.bulkInsert('QuizData', [{
    //     qustion: el[0],
    //     answer: el[1],
    //     id_themes: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }], {});
    // }


    for (let el of human) {
      await queryInterface.bulkInsert('QuizData', [{
        qustion: el[0],
        answer: el[1],
        id_themes: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }

  
    

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
