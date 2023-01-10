/*  let table= [[8, 7, 9],
            [6, 7, 6],
            [3, 2, 5]];   

 console.log(table[0]); Returns [ 8, 7, 9 ] */

/*
 let table = [[0,0,0,0,0,0,0,0],
              [0,0,0,2,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,1,0,0,0,0]];

let tableDraw = ""

function move(){
    
}

for(let pointColumn = 0; pointColumn <= 8; pointColumn++){

    tableDraw += "+---+---+---+---+---+---+---+---+" +"\n";

    if(pointColumn == 8){
        continue;
    }

    for(let pointRow = 0; pointRow < 8; pointRow++){

        const symbol = table[pointColumn][pointRow];
        // display table empty spaces
        let symbolsList = [" ", "I", "Y"];

        if(pointRow){
            tableDraw += ` ${symbolsList[symbol]} |`;
        }
        else{
            tableDraw += `| ${symbolsList[symbol]} |`;
        };
        
        // this will add a new line at the end of the 8th row
        if (pointRow == 7){
            tableDraw += "\n";
        };
    }
}
console.log(tableDraw);

/* 
function drawHorizontal(){
    let horizontal = ""
    for (let h = 0; h < 8; h++){
        h == 0 ? horizontal += "+---+" : horizontal += "---+";
    }

    console.log(horizontal);
};

function drawVertical(){
    let vertical = ""
    for (let v = 0; v < 8; v++){
         v == 0 ? vertical += "|   |" : vertical += "   |";
    }
    console.log(vertical);
};

function drawTable(){
    for (let t = 0; t < 8; t++){
        drawHorizontal();
        drawVertical();
    }
    drawHorizontal();
};

drawTable();


 */


//let l1 = [1,2,3];


//console.log(l1[2]);



var addTwoNumbers = function(l1, l2) {

    let lenght = 0;
    let newList = [];
    let counter = 0;

    l1.lenght >= l2.lengt ? lenght = l1.lenght : lenght = l2.lenght; // find the number with biggest or equal number of elements 
    
    for(var i = lenght - 1; i >= 0; i--){
        if (l1[i]  == undefined){
            l1[i] = 0;
        }

        if (l1[2]  == undefined){
            l1[2] = 0;
        }

        sum = l1 + l2 + counter;
        counter = 0;  // to reset the used counter used in the previous number

        if(sum >= 10) {
            sum -= 10;
            counter+= 1;
        }
        console.log(sum);

        newList.push(sum); // add the summed number to the new list

    }
    return newList;
    
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));