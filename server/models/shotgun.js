var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ShotgunSchema = new mongoose.Schema({
 start  : String,
 end    : String,
 _user  : { type: Schema.Types.ObjectId,  ref:"User"},
}, {timestamps: true})
var Shotgun = mongoose.model('Shotgun', ShotgunSchema);