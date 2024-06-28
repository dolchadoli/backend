const express = require('express');
const router = express.Router();

const starshipService = require('../services/starshipService');

router.get('/all', starshipService.getAll);
router.get('/:id', starshipService.getOne);
router.post('/add', starshipService.add);
router.delete('/:id', starshipService.delete);
router.put('/:id', starshipService.update);

module.exports = router;
