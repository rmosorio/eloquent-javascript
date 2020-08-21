var tab = '';
var height = 3;
var width = 5;

for(var x = 0; x < height; x++){
    for(var y = 0; y < width; y++)
        tab += x%2==0?' #':'# ';

    tab += '\n';
}

console.log(tab);
