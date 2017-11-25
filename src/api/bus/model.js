import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'
import { env } from '../../config'

var BusSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  bus_id: { type: Number, required: true },
  provider_id: { type: Number, required: true },
  bus_number: { type: String, required: true },
  bus_type: { type: String, required: true },
  driver_name: { type: String, required: true },
  number_of_seats: { type: Number, required: true },
  route_id: { type: Number, required: true },
  created_at: Date,
  updated_at: Date
}, { versionKey: false });

// on every save, add the date
BusSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

module.exports = mongoose.model('Buses', BusSchema);