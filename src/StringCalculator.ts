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

    return nums.reduce((sum, current) => sum + current, 0);
  }
}
