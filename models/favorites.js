var mongoose = require('mongoose');

var favoriteSchema = new mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Favorite'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Favorites', favoriteSchema);
