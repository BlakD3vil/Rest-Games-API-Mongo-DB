const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

//routes

router.get('/api/games/', gameController.listGames);
router.post('/api/games/', gameController.InsertSingleGame);
router.patch('/api/games/:id', gameController.UpdateSingleGame);
router.delete('/api/games/:id', gameController.DeleteSingleGame);

module.exports = router;