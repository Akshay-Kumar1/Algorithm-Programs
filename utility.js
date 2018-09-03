module.exports={
    getCurrentTime : function()
{   
    var d=new Date(); // fetches the current date
    var n=d.getTime(); // fetches current time
    return n;
},
getElapsedTime : function(startTime,stopTime)
{
    var elapsed = (stopTime-startTime)/1000; // elapsed time from start to stop
    return elapsed;
},

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
        var num;
        var arr = new Array(number)
        num=number
        for(var i=0;i<number;i++)
        {
            arr[i]=prompt('Enter ' + num-- + ' element(s) : ')
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

mergeSort : function(size)
{
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
            for(var i=0;i<size;i++)
            {
                arr[i]=prompt("enter elements: ");
                
            }
            console.log((arr));
           // console.log("before merge arr len "+arr.length);
            this.merge((arr));
            //console.log("after merge arr len "+arr.length);
            arr.forEach(element =>
                {
            
                    console.log(parseInt(element));
                });
    },  
    merge : function(arr)
    {
        if(arr.length==1)
        {
            return; 
        }
        var m=Math.floor(arr.length/2);
        var a1=new Array(m);
        var a2=new Array(arr.length-m);
        var i;
        for(i=0;i<a1.length;i++)
        {
            a1[i]=parseInt(arr[i]);
            
        }
        for(var j=0;j<a2.length;j++,i++)
        {
            a2[j]=parseInt(arr[i]);
            
        }
        this.merge(a1);
        this.merge(a2);
        this.merger(a1,a2,arr);
    },
    merger : function(a,b,c)
    {
        var i=0,j=0,k=0;
        while(i<a.length && j<b.length)
        {
            if(a[i]<b[j])
            {
                c[k]=parseInt(a[i]);
                i++;
                k++;
            }
            else
            {
                c[k]=parseInt(b[j]);
                k++;
                j++;
            }
        }
        while(i<a.length)
        {
            c[k]=parseInt(a[i]);
            k++;
            i++;
        }
        while(j<b.length)
        {
            c[k]=parseInt(b[j]);
            k++;
            j++;
        }
},

toBinary : function(number)
{
    if(number ==0)
    {
        console.log(0);
    }
    else
    {
        var arr = [],i;    
      
    for(i=0;number>0;i++)    
    {    
        arr[i]=Math.floor(number%2);    
        number=Math.floor(number/2);    
    }    
    console.log("\nBinary of Given Number is=");     
   // for(i=arr.length-1;i>=0;i--)
    console.log(arr.reverse());       
    return 0;
    }
      
},
nibbleSwap : function(number)
{   
    var flag=0
    var temp1 , temp2 
    temp1 = number & 0x0F
    temp2 = number & 0xF0
    temp1 = temp1 << 4
    temp2 = temp2 >> 4
    console.log(temp1|temp2)
    var result = temp1|temp2
        for(n=result ; n>0 ;n--)
        {
            if(result==Math.pow(2,n))
            {
                flag=1
                break     
            }
        }
        if(flag==1)
        console.log('Number is power of ' + (n))   
        else
        console.log('Not a power of 2')
},

calender : function(date,month,year)
{   
    var d,m,y,x;
    y = parseInt(year-Math.floor((14-month)/12))
    x = parseInt(y + Math.floor((y/4) - y/100 + y/400))
    m = parseInt(month + 12 * Math.floor((14-month)/12) -2)
    d = parseInt((date + x + 31 *Math.floor((m / 12))) % 7)
    switch(m)
    {
        case 1 : console.log('January')
                    break;
        case 2 : console.log('February')
                    break;
        case 3 : console.log('March')
                    break;
        case 4 : console.log('April')
                    break;
        case 5 : console.log('May')
                    break;
        case 6 : console.log('June')
                    break;
        case 7 : console.log('July')
                    break;
        case 8 : console.log('August')
                    break;
        case 9 : console.log('September')
                    break;
        case 10 : console.log('October')
                    break;
        case 11 : console.log('November')
                    break;
        case 12 : console.log('December')
                    break;
    }
    switch(d)
    {
        case 0 : console.log('Day is Sunday')
                 break;
        case 1 : console.log('Day is Monday')
                 break;
        case 2 : console.log('Day is Tuesday')
                 break;
        case 3 : console.log('Day is Wednesday')
                 break;
        case 4 : console.log('Day is Thursday')
                 break;
        case 5 : console.log('Day is Friday')
                 break;
        case 6 : console.log('Day is Saturday')
                 break;
    }
},
guessNumber : function(number)
{
    var num = Math.pow(2,number)
    console.log('Think of a number between 0 ' + num-1 )
    var arr = []
    for(i=0;i<=num-1;i++)
    {
        arr[i]= ++num
    }
    this.binary()
},

}


  

