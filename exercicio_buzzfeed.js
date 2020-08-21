
  for(var number = 1; number <= 100; number++){

    if (number % 3 == 0 && number % 5 == 0)
      console.log(number + ': BuzzFeed');
    else if (number % 3 == 0) {
      console.log(number + ': Buzz');
    } else if(number % 5 == 0) {
      console.log(number + ': Feed');
    }else
    console.log(number);
}