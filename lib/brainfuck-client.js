function bf(s, cb) {
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
      a[p] = prompt('').charCodeAt(0);
    case '.':
      cb(String.fromCharCode(a[p]));
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
    else cb();

  })(0, 0, [0]);
};
