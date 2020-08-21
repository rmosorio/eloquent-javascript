function countChar(word, letter) {

    var count = 0;

    for (var x = 0; x < word.length; x++) {
        if (word.charAt(x) == letter)
            count++;
    }

    return count;

}

console.log(countChar('Ricardo Miranda Medina Osorio', 'a'));