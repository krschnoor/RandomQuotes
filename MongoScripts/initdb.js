var MongoClient = require('mongodb').MongoClient;
var quotes  = require('./Quotes.json')

 
MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
 var mydb = db.db("FamousQuotes")

 console.log(quotes.length)

 var collection = mydb.collection('quotes');


for(var ctr =0;ctr<quotes.length;ctr++){

 insertQuote(quotes[ctr],collection)

}
            
            
 
  
 })

function insertQuote(quote,coll){



 coll.insert(quote,function(err,result){
           if(!err){
            
             console.log("inserted quote" + result[0])
             coll.save(result[0],{w:1},function(err,results){console.log(results)})
             //res.json(200,result);
      //       mydb.close()
             }

             else{mydb.close()}
//
           })

}