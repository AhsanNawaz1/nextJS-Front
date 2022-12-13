export const AppConfig = {
  site_name: 'CoFoundersLab',
  title: "CoFoundersLab: World's Largest Network of Entrepreneurs",
  description:
    'The leading entrepreneurial network where like-minded entrepreneurs connect, meet and collaborate.',
  locale: 'en',
};

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://nextjs-code.herokuapp.com/';

export const NEXT_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000');
