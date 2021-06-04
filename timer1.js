const timer = function() {
  const getArg = process.argv.slice(2);
  for (let input of getArg) {
    if (input > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, input * 1000);
    }
  }
};
timer();