//You are given two non-empty linked lists representing two non-negative integers. 

//The digits are stored in reverse order, and each of their nodes contains a single digit. 

//Add the two numbers and return the sum as a linked list.

//You may assume the two numbers do not contain any leading zero, except the number 0 itself.



var addTwoNumbers = function(l1, l2) {

    let listLenght = 0;
    let newList = [];
    let counter = 0;

    l1.length >= l2.length ? listLenght = l1.length : listLenght = l2.length; // find the number with biggest or equal number of elements 
    
    for(let i = listLenght - 1; i >= 0; i--){
        if (l1[i]  == undefined){
            l1[i] = 0;
            
        }

        if (l1[2]  == undefined){
            l1[2] = 0;
            
        }

        console.log(l1[i], l2[i]);
        sum = l1 + l2 + counter;
        counter = 0;  // to reset the used counter used in the previous number

        if(sum >= 10) {
            sum -= 10;
            counter+= 1;
        }
        console.log(sum);

        newList.push(sum); // add the summed number to the new list

    }
    return (newList);
    
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));