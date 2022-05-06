export function analyzeArray(array){
    let average, sum = 0;
    let max = array[0];
    let min = array[0];
    let length = array.length;
    
    for(let i = 0; i < length; i++){
        sum += array[i];

        if(min > array[i]){
            min = array[i];
        }

        if(max < array[i]){
            max = array[i];
        }
    }

    average = Math.round(sum/length);

    return { average, min, max, length }
}