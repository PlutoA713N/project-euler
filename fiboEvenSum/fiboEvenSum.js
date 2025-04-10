function fiboEvenSum(limit) {
  let num1 = 1,
    num2 = 2;
  let temp = 0,
    fiboEvenSumValue = 0;

  while (num2 <= limit) {
    num2 % 2 == 0 && (fiboEvenSumValue += num2);

    temp = num1 + num2;
    [num1, num2] = [num2, temp];
  }

  console.log(ar);

  return fiboEvenSumValue;
}

console.time("fiboEvenLoop");
console.log(fiboEvenSum(5000));
console.timeEnd("fiboEvenLoop");
