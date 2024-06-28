const mongoose = require('mongoose');

const starshipSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: { type: String },
    starshipClass: { type: String },
    manufacturer: { type: String },
    costInCredits: { type: Number },
    length: { type: Number },
    crew: { type: Number },
    passengers: { type: Number },
    cargoCapacity: { type: Number },
    hyperdriveRating: { type: Number },
    MGLT: { type: Number },
    consumables: { type: String }
}, {
    collection: 'starships',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const StarshipModel = mongoose.model('Starship', starshipSchema);
module.exports = StarshipModel;
