var usercontroller = require('../controllers/users.js');
var shotguncontroller = require('../controllers/shotguns.js');

var path = require('path');
module.exports = function(app) {
   // Routes
   // Root Request
   app.get('/users', usercontroller.index);
   app.post('/newuser', usercontroller.new);
   app.post('/getuser', usercontroller.findOne);
   
   app.post('/newshotgun', shotguncontroller.new);
   app.post('/shotguns', shotguncontroller.index);
   app.post('/getshotgun', shotguncontroller.findOne);




   app.all('*', (req, res) => {
       res.sendFile(path.resolve('public/dist/index.html'));
   });
}