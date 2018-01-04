var express = require('express');
module.exports = function(app){
var quotes = require('./quotesController.js')

app.get('/quotes',quotes.getQuote);

}
