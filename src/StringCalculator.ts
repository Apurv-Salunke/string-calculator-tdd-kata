export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    let delimiter = ",";
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = parts[0].substring(2);
      numbers = parts[1];
    }

    const nums = numbers
      .replace(/\n/g, delimiter)
      .split(delimiter)
      .map((num) => parseInt(num, 10));

    const negatives = nums.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }
    return nums.reduce((sum, current) => sum + current, 0);
  }
}
