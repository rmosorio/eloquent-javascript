function arrayToList(p_array){

    var list = {};

    for(var x = p_array.length; x >= 0; x--){
        list = {value: p_array[x], rest: list}
    }

    return list;

}

function listToArray(p_list){

    var v_array = [];

    for (var node = p_list; node; node = node.rest) {
        v_array.push(node.value);
    }

    return v_array;

}

function prepend(element, p_list){

    return {value : element, rest: p_list};
}

function nth(element, p_list){

    if (p_list.value == element)
        return p_list;
    else if(p_list.rest == undefined)
        return undefined;
    else
        return nth(element, p_list.rest);
}

list = prepend(4, arrayToList([1,2,3]));

array = listToArray(list);

console.log(array);

console.log(nth(3, list));