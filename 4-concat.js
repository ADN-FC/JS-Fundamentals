const arg1 = process.argv[2];
const arg2 = process.argv[3];

function printArgs(a, b) {
  console.log(a + ' is ' + b);
}

printArgs(arg1, arg2);