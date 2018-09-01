var fs = require('fs')
var prompt = require('prompt-sync')()
var utility = require ('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')
var data =fs.readFileSync('searchList.txt')
data = data.toString().split(',');

function wordsList()
{
    var toSearch = prompt('Enter the word to search : ');
    utility.wordsList(data,toSearch)
}
wordsList()