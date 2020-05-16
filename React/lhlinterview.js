Write a function that prints all the numbers from 1 to 100. However, for multiples of 3, instead of the number, print "Fizz", and for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function FizzBuzz(){
for(let i=1; i<= 100; i++){

// i = 15

// i exist only inside here
if (i%3==0 && i%5 ==0){
console.log("FizzBuzz");
}

Else If (i%3==0) {
console.log(“Fizz”);
}
Else if(i%5 ==0){
console.log(“Buzz”);
}
Else{
console.log(i);
}

}

}
FizzBuzz();
var output = [];
var count= 1;

function fizzBuzz() {
    if ((count%3 === 0 && count%5 === 0)){
        output.push("fizzBuzz");
    }
    else if (count % 3 === 0){
        output.push("fizz");
    }
    else if (count % 5===0){
        output.push('Buzz');
    }
    else{output.push(count);}
    
    count++;
    console.log(output);
}
