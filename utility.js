module.exports={

    anagram : function(str0,str)
    {   
        if(!NaN)
        {
            
        var s1 = str0.toLowerCase().split('').sort().join('').trim();
        var s2 = str.toLowerCase().split('').sort().join('').trim();
        
        if(s1===s2)
        {
            console.log('Its an Anagram')
        }
        else
        {
            console.log('Not an Anagram')
        }
    }
    else 
    {
        console.log('Not a String')
    }
},
    primenos : function(min,max)
    {

        if (min > max) 
        {
            temp = min;
            min = max;
            max = temp;
        }

    var  i, flag=0
    while (min < max)
    {
        flag = 0;

        for(i = 2; i <= min/2; ++i)
        {
            if(min % i == 0)
            {
                flag = 1;
                break;
            }
        }

        if (flag == 0 && min!=0)
            console.log(min);

        ++min;
    }

    return 0;

},
 primePalin : function(min , max){
    var char = min
    if (min > max) 
    {
        temp = min;
        min = max;
        max = temp;
    }

var  i, flag=0
while (min < max)
{
    flag = 0;

    for(i = 2; i <= min/2; ++i)
    {
        if(min % i == 0)
        {
            flag = 1;
            break;
        }
    }

    if (flag == 0 && min!=0)
       { 
         if(min.toString().split('').reverse().join('')==min && char.toString().split('').sort().join('').trim())
         console.log(min)
       }
       ++min;
}

return 0;

 },

 binary : function(number)
 {      
        var prompt=require('prompt-sync')()
        var arr = new Array(number);
        var check = 0; 
        for(var i=0;i<number;i++)
        {
            arr[i] = prompt('Enter the numbers : ')
        }

        arr.sort();
        console.log(arr)
        var low = 0,high =number-1;
        var key = prompt('Enter the element to be searched : ')
        
        while(low<=high)
        {
            var mid = Math.floor((low+high)/2)
            if(key == arr[mid])
            {
                check = 1 ;
                break;
            }
            else 
            {
                if (key > arr[mid])
                    low = mid + 1
                else 
                    high = mid - 1   
            }

        }
        if(check==1)
        console.log('Element found at index '+ mid)
        
        else 
        console.log('Not found ')
        return 0;
        
    },

  bubble : function(number)
  {     var prompt = require('prompt-sync')()
        var temp;
        var arr = new Array(number)
        for(var i=0;i<number;i++)
        {
            arr[i]=prompt('Enter ' + number + ' elements ')
        }
    
       for(var i=0;i<arr.length-1;i++)
        {
        
             for(var j=0;j<arr.length-1-i;j++)
             {
                 if(arr[j]>arr[j+1])
                 {
                     var temp=parseInt(arr[j]);
                     (arr[j])=parseInt(arr[j+1]);
                     (arr[j+1])=temp;
                 }
             }
        }   
            console.log('Sorted array')
            console.log(arr)
        
  },

  insertionSort : function(number)
{
  var c, d, t;
  var array = new Array(number)
  var prompt = require('prompt-sync')()
  for (c = 0; c < number; c++) 
  {
        array[c] = prompt('Enter the elements')
  }
    console.log(array)
    for (c = 1 ; c <= number - 1; c++) 
    {
         d = c;
 
      while ( d > 0 && array[d-1] > array[d]) 
      {
        t  = parseInt(array[d]);
        array[d]  = parseInt(array[d-1]);
        array[d-1] = t;
        d--;
     }
  }
 
    console.log("Sorted list in ascending order:\n");
 
    console.log(array);

    return 0;
},

wordsList : function(arr,toSearch)
{   
    arr=arr.sort();
    console.log(arr)
    var check =0
    var low = 0,high = (arr.length-1);
    while(low<=high)
    {
        var mid = Math.floor((low+high)/2)
        if(toSearch == arr[mid])
        {
            check = 1 ;
            break;
        }
        else 
        {
            if (toSearch > arr[mid])
                low = mid + 1
            else 
                high = mid - 1   
        }

    }
    if(check==1)
    console.log('Element found at index '+ mid)
    
    else 
    console.log('Not found ')
    return 0;
    
},
payment : function(principal,years,rate)
{   
    var r = rate/(12*100)
    var n = years * 12
    var payment = (principal*r)/(1-Math.pow((1+r),-n))
    console.log('Monthly Payment is ' +payment)
    
},

newtons : function(c)
{
    if(c>=0)
    {
        var epsilon = 1e-15
        var t=c;
        while(Math.abs(t-c/t)>epsilon*t)
        {
            t = (c/t + t)/2.0
        }
        console.log(t)
    }
    else
    {
        console.log('Not a positive number')    
    }
},
notes : function(amount)
{
    var count=0;
    value=1;
    switch(value)
    {
        case 1 : if(amount/1000>=1)
                    {   
                        var res =Math.floor(amount/1000)
                        console.log('Number of 1000 notes : ' +res)
                        amount=amount-(res*1000)
                        count=count + res                    
                    }
                
        case 2 : if(amount/500>=1)
                    {
                        var res1=Math.floor(amount/500)
                        console.log('Number of 500 notes : '+res1)
                        amount=amount-(res1*500)
                        count=count + res1
                    }
        case 3 : if(amount/100>=1)
                    {
                        var res2=Math.floor(amount/100)
                        console.log('Number of 100 notes : '+res2)
                        amount=amount-(res2*100)
                        count=count + res2
                    }
        case 4 : if(amount/50>=1)
                    {
                        var res3=Math.floor(amount/50)
                        console.log('Number of 50 notes : '+res3)
                        amount=amount-(res3*50)
                        count=count + res3
                    }
        case 5 : if(amount/10>=1)
                    {
                        var res4=Math.floor(amount/10)
                        console.log('Number of 10 notes : '+res4)
                        amount=amount-(res4*10)
                        count=count + res4
                    }
        case 6 : if(amount/5>=1)
                    {
                        var res5=Math.floor(amount/5)
                        console.log('Number of 5 notes : '+res5)
                        amount=amount-(res5*5)
                        count=count + res5
                    }  
        case 7 : if(amount/2>=1)
                    {
                        var res6=Math.floor(amount/2)
                        console.log('Number of 2 notes : '+res6)
                        amount=amount-(res6*2)
                        count=count + res6
                    }
        case 8 : if(amount/1>=1)
                    {
                        var res7=Math.floor(amount/1)
                        console.log('Number of 1 notes : '+res7)
                        count=count + res7
                    }                     
    }
    count=parseInt(count);
    console.log('Total number of notes that the machine should provide is : ' + count)
},
}   

