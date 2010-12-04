module.exports = function (string) {
  var stdin;
  string = string.replace(/[^+-\[\].,<>]+/, '');
  (function next(parsed, pointer, array) {
    var char = string.charAt(parsed),
        f = null,
        i = array[pointer] - 1;

    parsed += 1;

    switch (char) {
    case '+':
      array[pointer] = (array[pointer] + 1) % 255;
      break;
    case '-':
      array[pointer] = (array[pointer] - 1) % 255;
      break;
    case '>':
      pointer += 1;
      array[pointer] = array[pointer] || 0;
      break;
    case '<':
      pointer -= 1;
      break;
    case ',':
      stdin = stdin || process.openStdin();
      stdin.setEncoding('ascii');
      stdin.on('data', function (chunk) {
        array[pointer] = chunk.slice(0, -1).charCodeAt(0);
        stdin.removeListener('data', arguments.callee);
        next(parsed, pointer, array);
      });
      return parsed;
    case '.':
      console.log(String.fromCharCode(array[pointer]));
      break;
    case '[':
      if (i >= 0) {
        for (; i >= 0; i -= 1) {
          f = next(parsed, pointer, array);
          parsed = (i === 0 ? f : parsed);
        }
      }
      break;
    case ']':
      return parsed;
    }

    if (string.length > parsed) {
      return next(parsed, pointer, array);
    } else {
      process.exit();
    }

  }(0, 0, [0]));
};
