
const winston =require('winston');
require('winston-mongodb');
require('express-async-errors');


module.exports = function(){
  
    winston.handleExceptions(
    new winston.transports.File({filename:'uncaughtException.log'})
   );
   process.on('unhandledRejection',(ex)=>{
    throw ex

   });

   winston.add(new winston.transports.File({filename:'logfile.log'}));
   winston.add(new winston.transports.MongoDB({db:'mongodb://localhost/vidly',level:'info'}));
  
};