import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'
import { env } from '../../config'

var cardSchema = new mongoose.Schema({
  card_number:{type:Number,required:true, unique: true},

  account_number:{type:Number,required:true},

  activation_date:{type:Date,required:true},

  expiry_date:{type:Date,required:true},

  status:{type:String,required:true},

  balance:{type:Number,required:true},

  type:{type:String,required:true},

  created_at: Date,

  updated_at: Date
});

// on every save, add the date
cardSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

module.exports = mongoose.model('Card', cardSchema);
