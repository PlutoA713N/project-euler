function multiplesOf3Or5(number) {
  let num1 = 3,
    num2 = 5;

  let integer = 0,
    multipleSum = 0;

  while (integer < number - 1) {
    integer += 1;

    if (!(integer % num1) || !(integer % num2)) {
      multipleSum += integer;
    }
  }

  return multipleSum;
}

multiplesOf3Or5(8456);
