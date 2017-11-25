
var Trip = require('./model.js');

import { Router } from 'express'

const router = new Router()


var errorMsg = "";

/* GET ALL BUSROUTES */
router.get('/', function(req, res, next) {
  Trip.find(function (err, results) {
    if (err) return next(err);
    res.json({status: 200, content: results});
  });
});

/* GET SINGLE BUSROUTE BY ID */
router.get('/:id', function(req, res, next) {
  Trip.find({id: req.params.id}, function (err, results) {
    if (err) {
      res.status(400).json({status: 400, error: "invalid id - " + req.params.id});
      return next(err);
    }
    res.json({status: 200, content: results});
  });
});

/* SAVE BUSROUTE */
router.post('/', function(req, res, next) {
  Trip.findOne().sort({id:-1}).exec(function (err, resultMaxId) {
    if (resultMaxId == null || resultMaxId.length == 0) {
      req.body.id = 1;
    } else {
      req.body.id = resultMaxId.id + 1;
    }

    Trip.create(req.body, function (err, results) {
      if (err) {
        for (var prop in err.errors) {
          if (err.errors.hasOwnProperty(prop)) {
            errorMsg += err.errors[prop] + " ";
          }
        }
        res.status(400).json({error: errorMsg});
        return next(err);
      }
      res.json({status: 201, content: results});
    });
  });
});

/* UPDATE BUSROUTE */
router.put('/:id', function(req, res, next) {
  Trip.findOneAndUpdate({id: req.params.id}, req.body, function (err, results) {
    if (err) {
      res.status(400).json({status: 400, error: "invalid id - " + req.params.id});
      return next(err);
    }
    res.json({status: 200, content: results});
  });
});

/* DELETE BUSROUTE */
router.delete('/:id', function(req, res, next) {
  Trip.deleteOne({id: req.params.id}, req.body, function (err, results) {
    if (err) return next(err);
    res.json({status: 200, content: results});
  });
});

module.exports = router;