const mongoose = require('mongoose');

const worldSchema = new mongoose.Schema({
    name: { type: String, required: true },
    climate: { type: String },
    terrain: { type: String },
    population: { type: Number }
}, {
    collection: 'worlds',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const WorldModel = mongoose.model('World', worldSchema);
module.exports = WorldModel;
