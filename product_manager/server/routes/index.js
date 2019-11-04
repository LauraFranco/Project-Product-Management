const express = require('express');
const router = express.Router();
const catchallRoute = require('./catchall.routes');
const apiRouter = express.Router();
const productRoutes = require('./product.routes');
apiRouter.use('/products', productRoutes);
router.use('/api', apiRouter)
  .use(catchallRoute);
module.exports = router;
