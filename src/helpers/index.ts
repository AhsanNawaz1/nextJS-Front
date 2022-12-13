import cookie from 'cookie';

export function parseCookies(req: any) {
  return cookie.parse(req ? req.headers.cookie || '' : '');
}

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export function formatAmountForDisplay(
  amount: number,
  currency: string
): string {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  return numberFormat.format(amount);
}

export function formatAmountForStripe(
  amount: number,
  currency: string
): number {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency: boolean = true;
  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}

export const truncate = (str: string, max: number, suffix: string) =>
  str.length < max
    ? str
    : `${str.substring(
        0,
        str.substring(0, max - suffix.length).lastIndexOf(' ')
      )}${suffix}`;
