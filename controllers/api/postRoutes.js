const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const allPosts = await Post.findAll();
      res.status(200).json(allPosts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
    try {
      const newPosts = await Post.create(req.body);
      res.status(200).json(newPosts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.delete('/:id', async (req, res) => {
    try {
      const deletePost = await Post.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!deletePost) {
        res.status(404).json({ message: 'not found' });
        return;
      }
      res.status(200).json(deletePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;