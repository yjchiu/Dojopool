var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DriverSchema = new mongoose.Schema({
 start  : String,
 end    : String,
 _user  : { type: Schema.Types.ObjectId,  ref:"User"},
}, {timestamps: true})
var Driver = mongoose.model('Driver', DriverSchema);