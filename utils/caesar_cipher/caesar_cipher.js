function caesarCipher(string, shift){
    let cipherText = "";
    
    for(let i = 0; i < string.length; i++){
        
        if(string[i] === " "){
            cipherText += " ";
        }else{
            let charCode = string.toLowerCase().charCodeAt(i);
        
            if(isLetter(string[i])){
                let shiftCount = shift;

                while(shiftCount !== 0){
                    charCode += 1;
                    shiftCount -= 1;

                    if(charCode === 123){
                        charCode = 97;
                    }
                }
            }
            cipherText += String.fromCharCode(charCode);
        }

    }

    let finalText = "";

    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i].toUpperCase()){
            finalText += cipherText[i].toUpperCase();
        }else{
            finalText += cipherText[i];
        }
    }
    return finalText;
}

function isLetter(value){
    return /^[aA-zZ]+$/.test(value);
}

export {caesarCipher}