const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("other");
});

// router.get('/home', withAuth ,async (req, res) => {
//   res.render('home', {logged_in: req.session.logged_in});
// });

router.get("/home", async (req, res) => {
  res.render("home");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/newUser", async (req, res) => {
  res.render("createUser");
});

router.get("/adopt", async (req, res) => {
  // const adoptablePlants = await Post.findAll();

  const adoptablePlants = await Post.findAll().catch((err) => {
    res.json(err);
  });

  const plants = adoptablePlants.map((post) => post.get({ plain: true }));
  res.render("adopt", { plants });
});

router.get("/easy", async (req, res) => {
  const easyCarePlants = await Post.findAll({
    where: {
      easy_care: true,
    },
  });

  const easyPlants = easyCarePlants.map((post) => post.get({ plain: true }));
  res.render("easyCare", { easyPlants });
});

router.get("/newPost/posts", async (req, res) => {
  res.render("newPost");
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

// router.get('/easy', withAuth ,async (req, res) => {
//   try{
//     const easyPlants = await Post.findAll(req.params.easy_care);
//     if(!easyPlants) {
//         res.status(404).json({message: 'No plants found!'});
//         return;
//     }
//     const plantsEasy = easyPlants.get({ plain: true });
//     res.render('easy', {plantsEasy, logged_in: req.session.logged_in});
//   } catch (err) {
//       res.status(500).json(err);
//   };
// });

module.exports = router;
