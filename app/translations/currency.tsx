export const enCurrencyLocale = {
  delimiters: {
    thousands: ',',
    decimal: '.',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  ordinal: (value) => {
    /* tslint:disable:no-bitwise */
    const b = value % 10;
    return (~~(value % 100 / 10) === 1) ? 'th' :
      (b === 1) ? 'st' :
        (b === 2) ? 'nd' :
          (b === 3) ? 'rd' : 'th';
    /* tslint:disable:no-bitwise */
  },
  currency: {
    symbol: '$',
  },
};

export const frCurrencyLocale = {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  ordinal: (value) => value === 1 ? 'er' : 'e',
  currency: {
    symbol: '€',
  },
};

export const zhCurrencyLocale = {
  delimiters: {
    thousands: ',',
    decimal: '.',
  },
  abbreviations: {
    thousand: '千',
    million: '百万',
    billion: '十亿',
    trillion: '兆',
  },
  ordinal: () => {
    return '.';
  },
  currency: {
    symbol: '¥',
  },
};
