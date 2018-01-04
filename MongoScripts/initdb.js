var MongoClient = require('mongodb').MongoClient;
var quotes  = require('./Quotes.json')

 


 MongoClient.connect('mongodb://admin:5555@ds239587.mlab.com:39587/famousquotes', function(err, client) {
  // Create a collection we want to drop later
  const col = client.db('famousquotes').collection('quotes');
  // Show that duplicate records got dropped
  col.find({}).toArray(function(err, items) {
    console.log(items.length)
    for(ctr=0;ctr<quotes.length;ctr++){

      insertQuote(quotes[ctr],col)
    }
    
    client.close();
  });
});

function insertQuote(quote,coll){



 coll.insert(quote,function(err,result){
           if(!err){
            
             console.log("inserted quote")
             //coll.save(result[0],{w:1},function(err,results){console.log(results)})
             //res.json(200,result);
      //       mydb.close()
             }

             else{mydb.close()}
//
           })

}