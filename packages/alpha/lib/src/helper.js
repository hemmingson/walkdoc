export const kebabize = (str) =>
  str
    .split('')
    .map((c, i) =>
      c.toUpperCase() === c ? `${i !== 0 ? '-' : ''}${c.toLowerCase()}` : c
    )
    .join('')
