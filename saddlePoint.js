// It's called a "saddle point" because it is greater than or equal to every element in its row --->
// and less than or equal to every element in its column. (down)

function saddlePoints(table){
    let column = 0;
    let row = 0;
    let result = "";

    for (let a = 0; a <=2; a++){      // Select all numbers 
        for (let b = 0; b <=2; b++){ // in the table

            let counterC= 0;         // Counters (Columns and Rows) for the code last section
            let counterR = 0;       // they'll determine if the number is a saddle point

            let c = 0;              // These are used for columns and rows 
            let r = 0;             // verification

            // Loop for columns. It's going to check only on the same column the main number [a][b] is.

            for (let c = 0; c <=2; c++){ 
                if(a == c){
                    continue;            // When the [c][b] number reach the current number, 
                }                       // it will do nothing to avoid redundance
                else if(table[a][b] <= table[c][b]){
                    counterC += 1;
                }
            }

            // Loop for rows. It's going to check only on the same row the main number [a][b] is.

            for (let r = 0; r <=2; r++){
                if(b == r){         
                    continue;            // When the [a][r] number reach the current number,
                }                       // it will do nothing to avoid redundance
                else if(table[a][b] >= table[a][r]){
                    counterR += 1;
                }
            }

            if(counterC == 2 && counterR == 2){
                result += `{"column": ${b+1}, "row": ${a+1}}`+"\n";  //if both counters are equal to 2,
            }                                                       // it means this is a saddle point number
        }
    }
    return result;
}            

console.log(saddlePoints([
    [4, 5, 4],
    [3, 5, 5],
    [1, 5, 4]]));


console.log(saddlePoints([
        [8, 7, 9],
        [6, 7, 6],
        [3, 2, 5],
      ]));   
