const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewURLParser: true, useUnifiedTopology: true});

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error'));
database.once('open', function(){
    console.log('Connected to database')
});