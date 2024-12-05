export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }
    const nums = numbers.split(",").map((num) => parseInt(num, 10));
    return nums.reduce((sum, current) => sum + current, 0);
  }
}
