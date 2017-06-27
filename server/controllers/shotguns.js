var mongoose = require('mongoose');
var Shotgun = mongoose.model('Shotgun');
module.exports = {
   index: function(req,res){
       Shotgun.find({})
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in controller -find !!');
       })
   },
   new: function(req, res){
       console.log("Shotgun controller new function: ", req.body);
       Shotgun.create(req.body)
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in controller -create!!');
       })
   },
//    findOne:function(req,res){
//         // console.log(req);
//         console.log('server side findOne function', req.body);
//         Shotgun.findOne({email:req.body.email})
//         .then(data=>{
//             console.log("findOne")
//             // console.log(data);
//             res.json(data);
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     }
    
}