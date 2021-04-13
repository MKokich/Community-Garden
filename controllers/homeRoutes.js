const router = require("express").Router();
<<<<<<< HEAD
// const path = require('path');
const { Post, User } = require("../models");
// const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("other", { logged_in: req.session.logged_in });
=======
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  res.render('other', {logged_in: req.session.logged_in}); 
>>>>>>> 65d2084544cbc91864b19b59a89e83d6c0bd593d
});

// router.get('/home', withAuth ,async (req, res) => {
//   res.render('home', {logged_in: req.session.logged_in});
// });

router.get("/login", async (req, res) => {
  res.render("login");
});

<<<<<<< HEAD
router.get("/newUser", async (req, res) => {
  res.render("newUser");
});

// router.get("/adopt", withAuth, async (req, res) => {
//   const adoptablePlants = await Post.findAll().catch((err) => {
//     res.json(err);
//   });
=======
router.get('/newUser', async (req, res) => {
  res.render('createUser');
});

router.get('/adopt', async (req, res) => {
  
  const adoptablePlants = await Post.findAll().catch((err) => { 
    res.json(err);
    });
>>>>>>> 65d2084544cbc91864b19b59a89e83d6c0bd593d

//   const plants = adoptablePlants.map((post) => post.get({ plain: true }));

<<<<<<< HEAD
//   res.render("adopt", { plants, logged_in: req.session.logged_in });
// });

// router.get("/newPost/posts", withAuth, async (req, res) => {
//   res.render("newPost");
// });

// router.get("/easy", withAuth, async (req, res) => {
//   try {
//     // needs help
//     const easyPlants = await Post.findBy(req.params.easy_care);
//     if (!easyPlants) {
//       res.status(404).json({ message: "No plants found!" });
//       return;
//     }
//     const plants = easyPlants.get({ plain: true });
//     res.render("easy", { plants, logged_in: req.session.logged_in });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
=======
    res.render('adopt', plants);
    });

  router.get('/newPost/posts', async (req, res) => {
  res.render('newPost');
  
});

// router.get('/adopt', withAuth ,async (req, res) => {
  
//   const adoptablePlants = await Post.findAll().catch((err) => { 
//     res.json(err);
//     });

//   const plants = adoptablePlants.map((post) => post.get({ plain: true }));

//     res.render('adopt', { plants, logged_in: req.session.logged_in });
//     });

//   router.get('/newPost/posts', withAuth ,async (req, res) => {
//   res.render('newPost');
  
// });

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
>>>>>>> 65d2084544cbc91864b19b59a89e83d6c0bd593d

module.exports = router;
