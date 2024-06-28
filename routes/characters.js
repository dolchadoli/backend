const express = require('express');
const router = express.Router();

const characterService = require('../services/characterService');

router.get('/all', characterService.getAll);
router.get('/:id', characterService.getOne);
router.post('/add', characterService.add);
router.delete('/:id', characterService.delete);
router.put('/:id', characterService.update);

module.exports = router;
