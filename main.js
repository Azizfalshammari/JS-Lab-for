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
 
 


