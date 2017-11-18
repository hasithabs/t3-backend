var Passenger = require('./model.js');

import { Router } from 'express'

const router = new Router()


var errorMsg = "";

/* GET ALL PASSENGERS */
router.get('/', function(req, res, next) {
  Passenger.find(function (err, results) {
    if (err) return next(err);
    res.json({status: 200, content: results});
  });
});

/* GET SINGLE PASSENGER BY ID */
router.get('/:id', function(req, res, next) {
  Passenger.findById(req.params.id, function (err, post) {
    if (err) {
      res.status(400).json({status: 400, error: "invalid id - " + req.params.id});
      return next(err);
    }
    res.json({status: 200, content: post});
  });
});

/* SAVE PASSENGER */
router.post('/', function(req, res, next) {
  Passenger.create(req.body, function (err, post) {
    if (err) {
      for (var prop in err.errors) {
        if (err.errors.hasOwnProperty(prop)) {
          errorMsg += err.errors[prop] + " ";
        }
      }
      res.status(400).json({error: errorMsg});
      return next(err);
    }
    res.json({status: 200, content: post});
  });
});

/* UPDATE PASSENGER */
router.put('/:id', function(req, res, next) {
  Passenger.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) {
      res.status(232).json(err);
      // res.status(400).json({status: 400, error: "invalid id - " + req.params.id});
      return next(err);
    }
    res.json({status: 200, content: post});
  });
});


/* DELETE PASSENGER */
router.delete('/:id', function(req, res, next) {
  Passenger.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json({status: 200, content: post});
  });
});

module.exports = router;
