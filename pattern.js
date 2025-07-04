function printPattern(N) {
  const rows = N;
  const mid = Math.floor(N / 2);

  for (let i = 0; i < rows; i++) {
    let line = '';

    if (i <= mid) {
      for (let j = 0; j < i; j++) {
        line += ' ';
      }

      line += '\\';

      const spaceBetween = N - 2 * i - 2;
      for (let j = 0; j < spaceBetween; j++) {
        line += ' ';
      }

      if (spaceBetween >= 0) {
        line += '/';
      }
    } else {
      const mirrorRow = N - i - 1;

      for (let j = 0; j < mirrorRow; j++) {
        line += ' ';
      }

      line += '/';

      const spaceBetween = N - 2 * mirrorRow - 2;
      for (let j = 0; j < spaceBetween; j++) {
        line += ' ';
      }

      if (spaceBetween >= 0) {
        line += '\\';
      }
    }

    console.log(line);
  }
}

printPattern(7);
