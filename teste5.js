function reverseArray(p_array){

    var v_array = [];

    for(var x = 0; x < p_array.length; x++)
        v_array.unshift(p_array[x]);
    
    return v_array;
}

console.log(reverseArray([1,2,3,4,5,6]));