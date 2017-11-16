var router = require('express').Router();

//api router will mount other routers
// for all resources
router.use('/gurdwaras', require('./gurdwara/gurdwaraRoutes'));

module.exports = router;