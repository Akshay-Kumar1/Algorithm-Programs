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

}
