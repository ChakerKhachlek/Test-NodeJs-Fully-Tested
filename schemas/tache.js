const mongoose = require('mongoose');
 


const TacheSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    matricule: {
        type: String,
        required: true,
    },
    Score: {
        type: Number,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    },
    Email_User:{
        type: String,
        required: true,

    },
});

module.exports = mongoose.model('Tache', TacheSchema);
