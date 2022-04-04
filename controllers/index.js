const router = require('express').Router();

// Once I create the routes, I will uncomment each line of code below. Start with api routes
const apiRoutes = require('./api/index');
// then work on home routes after back end is operational
// const homeRoutes = require('./home-routes.js');
// then work on dashboard routes when I can get to this functionality
// const dashboardRoutes = require('./dashboard-routes.js');

// router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;