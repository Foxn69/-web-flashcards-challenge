const router = require('express').Router();
const {Themes} = require('../db/models')



router.route('/')
  .get(async (req, res)  =>  {

    const dbThemes = await Themes.findAll({raw: true})
    // console.log(dbThemes)
    console.log(dbThemes[1].title)
 
    res.render('main')
  })

  module.exports = router;
