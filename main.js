for (let index = 0; index < 25; index+=2){
    
    console.log(index)
}

for (let index = 0; index < 10; index++){
   
    console.log(Math.pow(index, 2))
}

for (let index = 0; index < 20; index++){
    if (index % 2 != 0){
        console.log(index)
    }
    
}

let fibonacci = 0;
let indexh1 = 0;
let indexh2 = 1;

for (let index = 0; index < 10; index++){
    if (fibonacci == 0){
        console.log(fibonacci)
    }    
    console.log(fibonacci)

    fibonacci = indexh1 + indexh2;
    indexh1 = indexh2
    indexh2 = fibonacci
    
}




for (let index = 1; index <= 3; index++){
    
    for (let index1 = 1; index1 <= 10; index1++){
        let result = index * index1;
        console.log(index +'x'+ index +' =' + result)
        
    }
     
 }
 

 
 //----------- Lab 2 ---------
num1=5
num2=10
function  sum(number1, number2){
    return number1 + number2
}

function  multiply(number1, number2){
    return number1 * number2
}
function  substraction(number1, number2){
    return number1 - number2
}
function  division(number1, number2){
    return number1 / number2
}
 
let divisionres = (num1, num2) => {return num1 / num2}




console.log(sum(num1, num2), multiply(num1, num2), substraction(num1, num2), divisionres(num1, num2))




function fuzznbuzz (x){
    if (x % 3 == 0 && x % 5 ==0){
        console.log('both fuzz and buzz')
    }else if  (x % 3 == 0 && x % 5 !=0){
        console.log('buzz');
    }
    else if (x % 3 != 0 && x % 5 ==0){
        console.log('fuzz');
}else{ console.log('neither')}
}


let fuzzer =fuzznbuzz(5);
let buzzer = fuzznbuzz(3);
let fuzzerbuzzer = fuzznbuzz(15);
let noner = fuzznbuzz(1);
