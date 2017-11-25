import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'
import { env } from '../../config'

var BusRouteSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  route_id: { type: Number, required: true },
  route_name: { type: String, required: true },
  stopping_count: { type: Number, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  created_at: Date,
  updated_at: Date
}, { versionKey: false });

// on every save, add the date
BusRouteSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

module.exports = mongoose.model('Route', BusRouteSchema);