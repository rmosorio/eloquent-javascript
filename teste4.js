function range(start, end, interval) {

    var array = [];

    if (interval == undefined ? 1 : interval > 0)

        for (var number = start; number <= end; number += (interval == undefined ? 1 : interval))
            array.push(number);

    else

        for (var number = end; number >= start; number += (interval == undefined ? 1 : interval))
            array.push(number);

    return array;

}

function sum(array) {

    var result = 0;

    for (var number = 0; number < array.length; number++)
        result += array[number];

    return result;

}
console.log(range(1, 10, -2));
console.log(sum(range(1, 10, 3)));