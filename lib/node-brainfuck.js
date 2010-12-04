module.exports = function (s) {
  var stdin;
  s = s.replace(/[^+-\[\].,<>]+/, '');
  (function r(h, p, a) {
    var c = s.charAt(h++), f = null, i = a[p]-1;
    switch (c) {
    case '+':
      a[p] = (a[p] + 1) % 255;
      break;
    case '-':
      a[p] = (a[p] - 1) % 255;
      break;
    case '>':
      p += 1;
      a[p] = a[p] || 0;
      break;
    case '<':
      p -= 1;
      break;
    case ',':
      stdin = stdin || process.openStdin();
      stdin.setEncoding('ascii');
      stdin.on('data', function (chunk) {
        a[p] = chunk.slice(0, -1).charCodeAt(0);
        stdin.removeListener('data', arguments.callee);
        r(h, p, a);
      });
      return h;
    case '.':
      console.log(String.fromCharCode(a[p]));
      break;
    case '[':
      if (i >= 0) {
        for (;i>=0;i--) {
          f = r(h, p, a);
          h = (i === 0 ? f : h);
        }
      }
      break;
    case ']':
      return h;
    }

    if(s.length > h) return r(h, p, a);
    else process.exit();

  })(0, 0, [0]);
};
