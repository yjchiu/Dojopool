var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
 first_name   : String,
 last_name    : String,
 phone_number : String,
 email        : String,
 password     : String,
//  shotguns     : [{tpye: Schema.Types.ObjectId, ref:"Shotgun"}],
//  drivers     : [{tpye: Schema.Types.ObjectId, ref:"Driver"}]
}, {timestamps: true})
var User = mongoose.model('User', UserSchema);