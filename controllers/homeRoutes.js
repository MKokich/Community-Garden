const router = require('express').Router();
// const path = require('path');
const { Post, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('other', {logged_in: req.session.logged_in}); 
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

// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const projectData = await Project.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const projects = projectData.map((project) => project.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       projects, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
  

// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;

