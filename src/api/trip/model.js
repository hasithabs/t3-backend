import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'
import { env } from '../../config'

var TripSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  bus_id: { type: Number, required: true },
  route_id: { type: Number, required: true },
  rate_per_km: { type: Number, required: true },
  passenger_count: { type: Number, required: true },
  total_income: { type: Number, required: true },
  created_at: Date,
  updated_at: Date
}, { versionKey: false });

// on every save, add the date
TripSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

module.exports = mongoose.model('Trips', TripSchema);