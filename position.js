number = "29";
contigousStringNumber = 2;
let a = 0;
let stringResult = "";
let total = 0;
let totalList = [];
let highestNumber = 0


while(a < number.length){

    stringResult = number.substr(a, contigousStringNumber);
    
    for(let stringNumber of stringResult){

        total *= parseInt(stringNumber);
    }
    console.log(total);

    totalList.push(total);

    a+=1;
    total = 1;
}

// Find highest number in the list

total = totalList[0];

for(let item of totalList){
    if (item > total){
        total = item;
    }

}


console.log(`this is total ${total}`);