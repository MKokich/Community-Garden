// root to route handler for plant post
const router = require("express").Router();
const { Post } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.findAll();
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((postData) => res.json(postData))
    .catch((err) => res.status(400).json(err));
});

router.get("/name/:plant_name", (req, res) => {
  Post.findAll({
    where: {
      plant_name: req.params.plant_name,
    },
  })
    .then((postData) => res.json(postData))
    .catch((err) => res.status(400).json(err));
});

router.get("/user/:user_id", (req, res) => {
  Post.findAll({
    where: {
      user_id: req.params.user_id,
    },
  })
    .then((postData) => res.json(postData))
    .catch((err) => res.status(400).json(err));
});

router.get("/easy/true", (req, res) => {
  Post.findAll({
    where: {
      easy_care: true,
    },
  })
    .then((postData) => res.json(postData))
    .catch((err) => res.status(400).json(err));
});

router.get("/:plant_name", (req, res) => {
  Post.findOne({
    where: {
      plant_name: req.params.plant_name,
    },
  })
    .then((postData) => res.json(postData))
    .catch((err) => res.status(400).json(err));
});

router.post("/newPost", async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    req.session.save(() => {
      req.session.user_id = newPost.id;
      // ???
      req.session.image_name = newPost.image_name;
      req.session.plant_name = newPost.plant_name;
      req.session.description = newPost.description;
      req.session.sun_requirement = newPost.sun_requirement;
      req.session.pet_safe = newPost.pet_safe;
      req.session.edible = newPost.edible;
      req.session.easy_care = newPost.easy_care;
      req.session.water_needed = newPost.water_needed;
      req.session.growth_rate = newPost.growth_rate;
      req.session.size = newPost.size;
      req.session.user_id = newPost.user_id;
      req.session.user_email = newPost.user_email;
      res.status(200).json(newPost);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletePost) {
      res.status(404).json({ message: "not found" });
      return;
    }
    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
