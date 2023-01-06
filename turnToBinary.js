
function turnToBinary(number){

    let maxNumber = 2 ** 512;
    binaryNumber = "";

    while(maxNumber >= 1){
        
        if (number >= maxNumber){
            binaryNumber += "1";
            number -= maxNumber;
        }      
        else{
            binaryNumber += "0";

            if (binaryNumber[0] == "0"){
                binaryNumber = "";
            }
        }
    
        maxNumber = maxNumber / 2; 
    }
    return binaryNumber;
}

console.log(turnToBinary(15843656845895429421));