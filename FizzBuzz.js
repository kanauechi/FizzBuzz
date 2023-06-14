 /**
 * 3の倍数のときは数の代わりに Fizz と、5の倍数のときは Buzz と表示し、
 * 3と5両方の倍数の場合には FizzBuzz と表示してください。
*/
function FizzBuzz(number){
    //numberが３と5両方の倍数のとき
    if(number % 3 === 0 && number % 5 === 0){
        console.log("FizzBuzz")
    }
      
    //numberが３の倍数のとき
    else if(number % 3 === 0) {
         console.log("Fizz")
    }
       
    //numberが5の倍数のとき
    else if(number % 5 === 0) {
        console.log("Buzz")
    }
        
    else {
        console.log(number)
    }     
}

for (let i = 1; i <= 20; i = i + 1){
    FizzBuzz(i)  
}
