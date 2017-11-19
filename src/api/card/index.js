var Card = require('./model.js');

import { Router } from 'express'

const router = new Router()


var errorMsg = "";

/* GET ALL CARDS */
router.get('/', function(req, res, next) {
  Card.find(function (err, results) {
    if (err) return next(err);
    res.json({status: 200, content: results});
  });
});

/* GET SINGLE CARD BY ID */
router.get('/:id', function(req, res, next) {
  Card.findOne({card_number: req.params.id}, function (err, post) {
    if (err) {
      res.status(400).json({status: 400, error: "invalid id - " + req.params.id});
      return next(err);
    }
    res.json({status: 200, content: post});
  });
});

/* SAVE CARD */
router.post('/', function(req, res, next) {
  Card.create(req.body, function (err, post) {
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

/* UPDATE CARD */
router.put('/:id', function(req, res, next) {
  Card.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) {
      res.status(232).json(err);
      // res.status(400).json({status: 400, error: "invalid id - " + req.params.id});
      return next(err);
    }
    res.json({status: 200, content: post});
  });
});


/* DELETE CARD */
router.delete('/:id', function(req, res, next) {
  Card.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json({status: 200, content: post});
  });
});

module.exports = router;
