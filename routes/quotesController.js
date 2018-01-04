var MongoClient = require('mongodb').MongoClient;
var mongoDB = process.env.MONGODB_URI || 'mongodb://admin:5555@ds239587.mlab.com:39587/famousquotes';

exports.getQuote = function(req,res){
 
 MongoClient.connect('mongodb://admin:5555@ds239587.mlab.com:39587/famousquotes' , function(err,client){
 
const col = client.db('famousquotes').collection('quotes');

 var quote 
 
 col.find({}).toArray(function(err, items) {
    console.log(items.length)
    
     var quote = items[Math.floor(Math.random()*items.length)]
    
      res.status(200).json(quote)
   });

 
    

 })

}