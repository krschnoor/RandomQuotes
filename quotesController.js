var MongoClient = require('mongodb').MongoClient;

exports.getQuote = function(req,res){
 
 MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
 var mydb = db.db("FamousQuotes");

 var quote 
 
 var collection = mydb.collection('quotes');

 
    collection.find().toArray(function(err, quotes) {
        if(!err){
        var retArr = [];
        
         for(var ctr = 0;ctr<quotes.length;ctr++) { 
                    
              retArr.push(quotes[ctr])
             }
          

        quote = retArr[Math.floor(Math.random()*retArr.length)]

        res.json(200,quote)
        console.log(quotes) //ajes comes here.
        db.close()}
    });    

 })

}