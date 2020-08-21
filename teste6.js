function reverseArrayInPlace(p_array){

    var mov = Math.floor(p_array.length/2);
    var aux;

    for(var x = 0; x < mov; x++){
        aux = p_array[x];
        p_array[x] = p_array[(p_array.length-1)-x]; 
        p_array[(p_array.length-1)-x] = aux;
    }

    return p_array;

}

console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8,9]));