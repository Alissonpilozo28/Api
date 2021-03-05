var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var tvshowSchema = new Schema({
    title: { type: String },
    year: { type: Number },
    country: { type: String },
    poster: { type: String },
    seasons: { type: Number },
    genre: {
        type: String, enum:
            ['Grados', 'Contaminantes', 'temperatura', 'presión']
    },
    summary: { type: String }
});

module.exports = mongoose.model('Clima Urbano', tvshowSchema);