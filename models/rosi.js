// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var rosiSchema = new Schema({
    // Provided by You
        // Months ASP Staged Before Sale 0.4
        // Months Not ASP Staged Before Sale 3
        // Mortgage Amount per Month $ 3000
        // Monthly Utilities $ 500
        // Staging Investment

    // Return on Staging Investment
        // Cost to Sell Your Home Unstaged $ 10500
        // Cost to Sell Your Home Staged $ 4400
        // Savings When You SELL Your Home ASP Staged $ 6100
        // Return on Staging Investment (ROSI®)

    name: {
        type: String,
        required: true,
        unique: true
    },

    label: {
        type: String,
        required: false,
        unique: false,
        default: ''
    },

    description: {
        type: String,
        required: true,
        unique: false
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Rosi = mongoose.model('Rosi', rosiSchema);

// make this available to our Node applications
module.exports = Rosi;
