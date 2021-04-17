const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  res.render("home", { logged_in: req.session.logged_in });
});

router.get("/home", withAuth, async (req, res) => {
  res.render("home", { logged_in: req.session.logged_in });
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/newUser", async (req, res) => {
  res.render("createUser");
});

router.get("/adopt", withAuth, async (req, res) => {
  const adoptablePlants = await Post.findAll().catch((err) => {
    res.json(err);
  });

  const plants = adoptablePlants.map((post) => post.get({ plain: true }));
  res.render("adopt", { plants, logged_in: req.session.logged_in });
});

router.get("/easy", withAuth, async (req, res) => {
  const easyCarePlants = await Post.findAll({
    where: {
      easy_care: "yes",
    },
  });

  const easyPlants = easyCarePlants.map((post) => post.get({ plain: true }));
  res.render("easyCare", { easyPlants, logged_in: req.session.logged_in });
});

// // for deleteing own posts
// router.get("/ownPost", async (req, res) => {
//   const myOwnPlants = await Post.findAll({
//     where: {
//       // ???
//       user.email : user_email,
//     },
//   });

//   const ownPlants = myOwnPlants.map((post) => post.get({ plain: true }));
//   res.render("ownPost", { ownPlants, logged_in: req.session.logged_in });
// });

router.get("/newPost", async (req, res) => {
  res.render("newPost");
});

module.exports = router;
