var mongoose = require('mongoose');
var Driver = mongoose.model('Driver');
module.exports = {
   index: function(req,res){
       Driver.find({})
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in controller -find !!');
       })
   },
   new: function(req, res){
       console.log("driver controller new function: ", req.body);
       Driver.create(req.body)
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in controller -create!!');
       })
   },
   findOne:function(req,res){
        // console.log(req);
        console.log('server side findOne function', req.body);
        Driver.findOne({ _user:req.body.id })
        .then(data=>{
            console.log("findOne")
            // console.log(data);
            res.json(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
}