// Formula for the n multipleSum = n * ((n * (n + 1) / 2)

function multiplesOf3Or5(num1, num2, limit) {
  let leastCommonMultiple = lcm(num1, num2);
  return (
    multipleSum(num1, limit) +
    multipleSum(num2, limit) -
    multipleSum(leastCommonMultiple, limit)
  );
}

function gcd(num1, num2) {
  while (num2 != 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
}

function lcm(num1, num2) {
  return (num1 * num2) / gcd(num1, num2);
}

function multipleSum(n, limit) {
  let totalMultiples = Math.floor((limit - 1) / n);
  let totalMultiplesSum = n * ((totalMultiples * (totalMultiples + 1)) / 2);
  return totalMultiplesSum;
}

console.log(multiplesOf3Or5(3, 5, 49));
