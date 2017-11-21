import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'
import { env } from '../../config'

var BusRouteSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  route_id: { type: Number, required: true },
  route_name: { type: String, required: true },
  stopping_count: { type: Number, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true }
}, { versionKey: false });

module.exports = mongoose.model('Route', BusRouteSchema);