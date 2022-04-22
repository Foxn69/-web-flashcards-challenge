const router = require('express').Router();
const {Themes, QuizData} = require('../db/models')



router.route('/')
  .get(async (req, res)  =>  {

    const dbThemes = await Themes.findAll({raw: true})
    // console.log(dbThemes)
    console.log(dbThemes[0].title)
 
    res.render('main', { dbThemes })
  })

  router.route('/card').get(async (req, res) => {

    const { query } = req;
    console.log('hhhhhhh', query)
    const theme_id = query.id;
    const theme = await Themes.findOne({ where: { id: theme_id }, raw: true });
    const questions = await QuizData.findAll({ where: { id_themes: theme_id }, raw: true });
    console.log('qqqqqqqqqqqqqq', questions)
    res.render('card', { theme, questions });
  });

  module.exports = router;
