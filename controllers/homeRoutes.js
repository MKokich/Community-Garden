const router = require("express").Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  res.render('home', {logged_in: req.session.logged_in}); 
});

router.get('/home', withAuth ,async (req, res) => {
  res.render('home', {logged_in: req.session.logged_in});
});

router.get('/login', async (req, res) => {
 res.render('login');
});

router.get('/newUser', async (req, res) => {
  res.render('newUser');
});

router.get('/adopt', withAuth ,async (req, res) => {
  
  const adoptablePlants = await Post.findAll().catch((err) => { 
    res.json(err);
    });

  const plants = adoptablePlants.map((post) => post.get({ plain: true }));

    res.render('adopt', { plants, logged_in: req.session.logged_in });
    });

  router.get('/newPost/posts', withAuth ,async (req, res) => {
  res.render('newPost');
  
});

router.get('/easy', withAuth ,async (req, res) => {
  try{ 
    // needs help
    const easyPlants = await Post.findBy(req.params.easy_care);
    if(!easyPlants) {
        res.status(404).json({message: 'No plants found!'});
        return;
    }
    const plants = easyPlants.get({ plain: true });
    res.render('easy', {plants, logged_in: req.session.logged_in});
  } catch (err) {
      res.status(500).json(err);
  };     
});

module.exports = router;
