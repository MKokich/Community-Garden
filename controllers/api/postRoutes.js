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

<<<<<<< HEAD
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((postData) => res.json(postData))
    .catch((err) => res.status(400).json(err));
});
=======
  router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id,
      }
    })
      .then((postData) => res.json(postData))
      .catch((err) => res.status(400).json(err));
  });

  router.get('/name/:plant_name', (req, res) => {
    Post.findAll({
      where: {
        plant_name: req.params.plant_name,
      }
    })
      .then((postData) => res.json(postData))
      .catch((err) => res.status(400).json(err));
  });

  router.get('/user/:user_id', (req, res) => {
    Post.findAll({
      where: {
        user_id: req.params.user_id,
      }
    })
      .then((postData) => res.json(postData))
      .catch((err) => res.status(400).json(err));
  });

  router.get('/easy/true', (req, res) => {
    Post.findAll({
      where: {
        easy_care: true,
      }
    })
      .then((postData) => res.json(postData))
      .catch((err) => res.status(400).json(err));
  });
>>>>>>> ed47e2867c0a4263afa9c3f92aa3616f421244d2

router.get("/:plant_name", (req, res) => {
  Post.findOne({
    where: {
      plant_name: req.params.plant_name,
    },
  })
    .then((postData) => res.json(postData))
    .catch((err) => res.status(400).json(err));
});

router.post("/", async (req, res) => {
  try {
    const newPosts = await Post.create(req.body);
    res.status(200).json(newPosts);
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
