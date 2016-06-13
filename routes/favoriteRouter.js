// Required Middlewares
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Models
var User = require('../models/user');
var Favorites = require('../models/favorites');
var Verify = require('./verify');

var favoriteRouter = express.Router();
favoriteRouter.use(bodyParser.json());

// App routes.
favoriteRouter.route('/')
    .get(Verify.verifyOrdinaryUser, function (req, res, next) {
        Favorites.find({'postedBy': req.decoded._doc._id})
            .populate('postedBy')
            .exec(function(err, favorite){
                if (err) next(err);
                res.json(favorite);
            })
        ;
    }) // .get

    .post(Verify.verifyOrdinaryUser, function (req, res, next) {
        Favorites.findOneAndUpdate(
            { postedBy: req.decoded._doc._id },
            { upsert:true, new:true },
            function(err, favorite) {
                if (err) throw(err);
                res.json(favorite);
            } // function(err, favorite)
        ); // Favorites.findOneAndUpdate

        console.log("You added the dish to your favorites!");
    }) // .post

    // drops the favorites collection
    .delete(Verify.verifyOrdinaryUser, function (req, res, next) {
        Favorites.remove({}, function(err, resp) {
            if (err) throw err;
            console.log("Favorites have been cleared.");
            res.json(resp);
        });
    })
; // favoriteRouter.route('/')

favoriteRouter.route('/:favoriteId')
    .all(Verify.verifyOrdinaryUser)

    // this will delete a single favorite dish.
    .delete(function (req, res, next) {
        // find logged on user's favorites
        Favorites.findOneAndUpdate(
            { postedBy: req.decoded._doc._id },
            { "new": true },
            function(err, favDish) {
                if (err) throw err;
                console.log("Favoris dish removed: " + favDish);
                res.json(favDish);
            } // function(err, favDish)
        ); // Favorites.findByIdAndRemove
    }) // .delete
; // favoriteRouter.route('/:favoriteId')

module.exports = favoriteRouter;
