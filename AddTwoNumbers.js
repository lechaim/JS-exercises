//You are given two non-empty linked lists representing two non-negative integers. 

//The digits are stored in reverse order, and each of their nodes contains a single digit. 

//Add the two numbers and return the sum as a linked list.

//You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function listEnlarger(list, zeroAdder){
    let addedZerosList = [];

    while(zeroAdder > 0){
        addedZerosList.push(0);
        zeroAdder -= 1;
    }

    list.forEach(element => addedZerosList.push(element));

    // hacer que devuelva una nueva lista con los 0's al principio
    return addedZerosList;
}

var addTwoNumbers = function(l1, l2) {

    let listLenght = 0;
    let newList = [];
    let counter = 0;
    
    if(l1.length != l2.length){

        let zeroAdder = Math.abs(l1.length - l2.length);

        if(l1.length > l2.length){
            l2 = listEnlarger(l2, zeroAdder);
        }
        else{
            l1 = listEnlarger(l1, zeroAdder);
        }
    }

    //l1.length >= l2.length ? listLenght = l1.length : listLenght = l2.length; // find the number with biggest or equal number of elements 

    for(let i = l1.length - 1; i >= 0; i--){

        let number1 = l1[i];
        let number2 = l2[i];

        let adder = number1 + number2 + counter;
        counter = 0;  // to reset the used counter used in the previous number

        if(adder >= 10) {
            adder -= 10;
            counter+= 1;
        }
        //console.log(adder);

        newList.push(adder); // add the summed number to the new list
        
    }
    if (counter > 0){
        newList.push(counter);
    }

    return (newList);
};

console.log(addTwoNumbers([2,4,3], [5,6,4])); // 708
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); // [8,9,9,9,0,0,0,1]

//me lo esta tomando alreves por eso no va a funcionar, comienza a buscar en la segunda lista el 7mo item el cual no existe