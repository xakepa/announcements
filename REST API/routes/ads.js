const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.ads.get);

router.get('/:id', controllers.ads.getSingleAd);

router.post('/', controllers.ads.post);

router.put('/:id', auth(), controllers.ads.put);

router.delete('/:id', auth(), controllers.ads.delete);

module.exports = router;
