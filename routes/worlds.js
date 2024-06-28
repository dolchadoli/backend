const express = require('express');
const router = express.Router();

const worldService = require('../services/worldService');

router.get('/all', worldService.getAll);
router.get('/:id', worldService.getOne);
router.post('/add', worldService.add);
router.delete('/:id', worldService.delete);
router.put('/:id', worldService.update);

module.exports = router;
