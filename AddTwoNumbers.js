/* You are given two non-empty linked lists representing two non-negative integers. 
 The digits are stored in reverse order, and each of their nodes contains a single digit. 
 Add the two numbers and return the sum as a linked list.
 You may assume the two numbers do not contain any leading zero, except the number 0 itself. */
 
 function listEnlarger(list, zeroAdder){
    let addedZerosList = [];

    while(zeroAdder > 0){
        addedZerosList.push(0);
        zeroAdder -= 1;
    }

    list.forEach(element => addedZerosList.push(element));

    return addedZerosList;
};

var addTwoNumbers = function(l1, l2) {

    let listLenght = 0;
    let newList = [];
    let counter = 0; 
    
    // This conditional will be used when the list lenght are not tha same.
    if(l1.length != l2.length){

        // With the variable zeroAdder the list listEnlarger function will add the diffence number of 0's to add
        // overwritting the least size list to the size of the biggest one.  
        let zeroAdder = Math.abs(l1.length - l2.length);

        if(l1.length > l2.length){
            l2 = listEnlarger(l2, zeroAdder);
        }
        else{
            l1 = listEnlarger(l1, zeroAdder);
        }
    }

    // A loop to checkout all the items in the lists in backward.
    for(let i = l1.length - 1; i >= 0; i--){

        let number1 = l1[i];
        let number2 = l2[i];

        let adder = number1 + number2 + counter;
        counter = 0;  // to reset the used counter used in the previous number

        // In case the sum of the numbers is greater or equal 10 the counter variable will be activated 
        // to add the result to the next number
        if(adder >= 10) {
            adder -= 10;
            counter+= 1;
        }

        newList.push(adder); // add the summed number to the new list
        
    }

    if (counter > 0){
        newList.push(counter); //This conditional will be used when the last summed number is greater or equal 10 and add the reamining value to the list
    }

    return (newList);
};

console.log(addTwoNumbers([2,4,3], [5,6,4])); // 708
console.log(addTwoNumbers([0], [0])); // [0]
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); // [8,9,9,9,0,0,0,1]
