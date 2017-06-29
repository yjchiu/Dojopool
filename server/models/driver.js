var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DriverSchema = new mongoose.Schema({
 driver_start  : String,
 driver_end    : String,
 shotgun_start : String,
 shotgun_end   : String,
 shotgun_name  : String,
 shotgun_phone : String, 
 _user  : { type: Schema.Types.ObjectId,  ref:"User"},
}, {timestamps: true})
var Driver = mongoose.model('Driver', DriverSchema);