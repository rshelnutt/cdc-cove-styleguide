const PATH = process.env.NODE_ENV === 'production' ? '/cdc-cove-styleguide' : ''

export const ROUTES = [
  {
    title: 'Overview',
    link: PATH + '/',
  },
  {
    title: 'Typography',
    link: PATH + '/typography',
  },
  {
    title: 'Themes',
    link: PATH + '/themes',
  },
  {
    title: 'Headings',
    link: PATH + '/headings',
  },
  {
    title: 'Navigation',
    link: PATH + '/navigation',
  },
  {
    title: 'Inputs',
    link: PATH + '/inputs',
  },
  {
    title: 'Buttons',
    link: PATH + '/buttons',
  },
  {
    title: 'Tooltips',
    link: PATH + '/tooltips',
  },
  {
    title: 'Icons',
    link: PATH + '/icons',
  }
]
