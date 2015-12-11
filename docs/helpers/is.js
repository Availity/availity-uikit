export default function is(a, b, opts) {

  if (a === b) {
    return opts.fn(this);
  }

  return opts.inverse(this);

};
