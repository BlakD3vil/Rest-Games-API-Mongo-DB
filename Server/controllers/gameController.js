require('../modules/database');
const Game = require('../modules/game');


//api/games/
//GET all games

exports.listGames = async(req, res) => {
    let { limit = 10, page = 1, genre} = req.query;

    const limitRecords = parseInt(limit);
    const skip = (page -1) * limit;

//In find for Custom Search: {$text : { $search: '...'} }

    try {
        const games = await Game.find({ genre: genre }).limit(limitRecords).skip(skip);
        res.json(games);
        
    } catch (err) {
        res.status(400).json( {message: err} )
        
    }

}

//POST Single Game 

exports.InsertSingleGame = async(req, res) => {

    const newGame = new Game ({
        name: req.body.name,
        description: req.body.description,
        genre: req.body.genre,
        developer: req.body.developer,
    });
    try {
        await newGame.save();
        res.json(newGame);
    } catch (err) {
        res.status(400).json( {message: err} )
    }
}

// api/movies/:id
// PATCH Single Game

exports.UpdateSingleGame = async(req, res) => {

    let paramID = req.params.id;
    let name = req.body.name;
    try {
        const updateGame = await Game.updateOne({_id:paramID}, { name:name });
        res.json(updateGame);
    } catch (err) {
        res.status(400).json( {message: err} )
    }
}

// api/movies/:id
// DELETE Single Game

exports.DeleteSingleGame = async(req, res) => {
    let paramID = req.params.id;
    
    try {
        const data = await Game.deleteOne({_id:paramID});
        res.json(data);
    } catch (err) {
        res.status(400).json( {message: err} )
    }
}
