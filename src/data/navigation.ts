export type NavigationLink = {
  title: string;
  value: string;
  transfer: boolean;
};

export const links: NavigationLink[] = [
  {
    title: 'Docs',
    value: '/docs/',
    transfer: true,
  },
  {
    title: 'Pricing',
    value: '/pricing/',
    transfer: true,
  },
  {
    title: 'Blog',
    value: '/blog/',
    transfer: false,
  },
  {
    title: 'Case Studies',
    value: '/case-studies/',
    transfer: true,
  },
];
