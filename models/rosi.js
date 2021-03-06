// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// We're going to need type Double.
require('mongoose-double')(mongoose);

// create a schema
var rosiSchema = new Schema({
    /* ==================================================================
        Provided by You
    ================================================================== */
    // Months ASP Staged Before Sale 0.4
    aspStagedBeforeSale: {
        type: SchemaTypes.Double
    },

    // Months Not ASP Staged Before Sale 3
    aspNotStagedBeforeSale: {
        type: SchemaTypes.Double
    },

    // Mortgage Amount per Month $ 3000
    mortage: {
        type: number,
        min: 0,
        required: true
    },

    // Monthly Utilities $ 500
    utilities: {
        type: number,
        min: 0,
        required: true
    },

    // Staging Investment
    stagingInvestment: {
        type: number,
        min: 0,
        required: true
    },

    /* ==================================================================
        Return on Staging Investment
    ================================================================== */
    // Cost to Sell Your Home Unstaged $ 10500
    unstagedCost: {
        type: number,
        min: 0,
        required: true
    },

    // Cost to Sell Your Home Staged $ 4400
    stagedCost: {
        type: number,
        min: 0,
        required: true
    },

    // Savings When You SELL Your Home ASP Staged $ 6100
    stagedSavings: {
        type: number,
        min: 0,
        required: true
    },

    // Return on Staging Investment (ROSI®)
    rosiResult: {
        type: SchemaTypes.Double
    },

    /* ==================================================================
        ROSI Result Description
    ================================================================== */
    description: {
        type: String,
        required: false,
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
