import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'
import { env } from '../../config'

var passengerSchema = new mongoose.Schema({
  passenger_id:{type:Number,required:true, unique: true},

  card_number:{type:Number,required:true},

  name:{type:String,required:true},

  dob:{type:Date},

  addr:{type:String,required:true},

  contact:{type:String,required:true},

  type:{type:String,required:true},

  nic_number:{type:String},

  passport_number:{type:String},
  
  created_at: Date,

  updated_at: Date
});

// on every save, add the date
passengerSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

module.exports = mongoose.model('Passenger', passengerSchema);
