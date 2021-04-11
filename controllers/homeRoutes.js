const router = require("express").Router();
// const path = require('path');
const { User } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('main', {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
<<<<<<< HEAD
  res.render("other");
=======
  res.render('other');
>>>>>>> 334ba354c3dc5aa5537e0d0b9dcd9e56d39d2242
});

module.exports = router;

// router.get('/', (req, res) => {
//         res.sendFile(path.join(__dirname, '/index.html'));
//       });

// router.get('/exchange', (req, res) => {
//         res.sendFile(path.join(__dirname, '/exchange.html'));
//       });

// router.get('/adopt', (req, res) => {
//         res.sendFile(path.join(__dirname, '/adopt.html'));
//       });

// router.get('/stemcuttings', (req, res) => {
//         res.sendFile(path.join(__dirname, '/stemcuttings.html'));
//       });

// router.get('/login', (req, res) => {
//         res.sendFile(path.join(__dirname, '/login.html'));
//       });

// router.get('/create', (req, res) => {
//         res.sendFile(path.join(__dirname, '/create.html'));
//       });

// router.get('/aboutUs', (req, res) => {
//         res.sendFile(path.join(__dirname, '/aboutUs.html'));
//       });

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
