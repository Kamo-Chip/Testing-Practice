function caesarCipher(string, shift){
    let cipherText = "";
    
    for(let i = 0; i < string.length; i++){
        
        if(string[i] === " "){
            cipherText += " ";
        }else{
            let charCode = string.charCodeAt(i);

            if(isLowerCaseLetter(string[i])){
                let shiftCount = shift;
               
                while(shiftCount !== 0){
                    if(charCode > 122){
                        charCode = 97;
                    }
                    charCode++;
                    shiftCount--;
                }
            }
            cipherText += String.fromCharCode(charCode);
        }
    }

    return cipherText;
}

function isLowerCaseLetter(value){
    return /^[a-z]+$/.test(value);
}

function isUpperCaseLetter(value){
    return /^[a-z]+$/.test(value);
}

export {caesarCipher}