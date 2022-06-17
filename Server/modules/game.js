const mongoose = require ('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    genre: {
        type: Array,
        required:true
    },
    developer: {
        type: String,
        required:true
    }

});

//Custom search
//gameSchema.index({"$**" : 'text'});

module.exports = mongoose.model('Game', gameSchema);