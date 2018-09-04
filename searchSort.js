var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')
function searchSort()
{
    console.log('1 : Enter 1 for BinarySerach method  for integer execution ')
    console.log('2 : Enter 2 for BinarySerach method  for string execution ')
    console.log('3 : Enter 3 for BubbleSort method  for integer execution ')
    console.log('4 : Enter 4 for BubbleSort method  for string execution ')
    console.log('5 : Enter 5 for InsertionSort method  for integer execution ')
    console.log('6 : Enter 6 for InsertionSort method  for string execution ')
    var choice = prompt('Enter your choice : ')

switch(parseInt(choice))
{
    case 1 : 
    var number = prompt('Enter the size of the array : ')
    startTime =  utility.getcurrentTime();
    utility.binary(number)
    var stopTime =  utility.getcurrentTime();
    var res1 = utility.getelapsedTime(startTime,stopTime)
    console.log('The elapsed time is ' +res1 + " seconds")

    case 2 :
    var number = prompt('Enter the size of the array : ')
    startTime =  utility.getcurrentTime();
    utility.binaryString(number)
    var stopTime =  utility.getcurrentTime();
    var res2 = utility.getelapsedTime(startTime,stopTime)
    console.log('The elapsed time is ' +res2 + " seconds")

    case 3 : 
    var number = prompt('Enter the size of the array : ')
    startTime =  utility.getcurrentTime();
    utility.bubble(number)
    var stopTime =  utility.getcurrentTime();
    var res3 = utility.getelapsedTime(startTime,stopTime)
    console.log('The elapsed time is ' +res3 + " seconds")

    case 4 : 
    var number = prompt('Enter the size of the array : ')
    startTime =  utility.getcurrentTime();
    utility.bubbleString(number)
    var stopTime =  utility.getcurrentTime();
    var res4 = utility.getelapsedTime(startTime,stopTime)
    console.log('The elapsed time is ' +res4 + " seconds")

    case 5 : 
    var number = prompt('Enter the size of the array : ')
    startTime =  utility.getcurrentTime();
    utility.insertionSort(number)
    var stopTime =  utility.getcurrentTime();
    var res5 = utility.getelapsedTime(startTime,stopTime)
    console.log('The elapsed time is ' +res5 + " seconds")

    case 6  : 
    var number = prompt('Enter the size of the array : ')
    startTime =  utility.getcurrentTime();
    utility.insertionSortString(number)
    var stopTime =  utility.getcurrentTime();
    var res6 = utility.getelapsedTime(startTime,stopTime)
    console.log('The elapsed time is ' +res6 + " seconds")
    
    var arr = [res1,res2,res3,res4,res5,res6]
    arr = arr.sort().reverse();
    console.log(arr)
}

}
searchSort()