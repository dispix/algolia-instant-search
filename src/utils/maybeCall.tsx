const maybeCall = <T extends any[], U>(
  fn: null | undefined | ((...args: T) => U),
) => (...args: T) => fn && fn(...args)

export default maybeCall
