const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    birthYear: { type: String },
    gender: { type: String },
    height: { type: Number },
    mass: { type: Number },
    homeworld: { type: String },
    species: { type: [String] }
}, {
    collection: 'characters',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const CharacterModel = mongoose.model('Character', characterSchema);
module.exports = CharacterModel;
