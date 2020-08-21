function verify(a) {
  if (a == 0)
    return 'par';
  else if (a == 1)
    return 'impar';
  else
    return verify(a - 2);
}

console.log(verify(51));