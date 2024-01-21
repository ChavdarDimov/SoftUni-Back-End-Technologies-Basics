function solveTask(num, op1, op2, op3, op4, op5) {
  let operations = [op1, op2, op3, op4, op5];
  let result = num;
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "chop":
        result /= 2;
        break;
      case "dice":
        result = Math.sqrt(result);
        break;
      case "spice":
        result += 1;
        break;
      case "bake":
        result *= 3;
        break;
      case "fillet":
        result *= 0.8;
        break;
    }
    console.log(result.toFixed(1));
  }
}