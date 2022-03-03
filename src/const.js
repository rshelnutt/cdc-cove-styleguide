const ROOT_PATH = process.env.NODE_ENV === 'production' ? '/cdc-cove-styleguide' : ''

export const ROUTES = [
  {
    title: 'Overview',
    link: ROOT_PATH + '/',
  },
  {
    title: 'Typography',
    link: ROOT_PATH + '/typography',
  },
  {
    title: 'Themes',
    link: ROOT_PATH + '/themes',
  },
  {
    title: 'Headings',
    link: ROOT_PATH + '/headings',
  },
  {
    title: 'Navigation',
    link: ROOT_PATH + '/navigation',
  },
  {
    title: 'Inputs',
    link: ROOT_PATH + '/inputs',
  },
  {
    title: 'Buttons',
    link: ROOT_PATH + '/buttons',
  },
  {
    title: 'Tooltips',
    link: ROOT_PATH + '/tooltips',
  },
  {
    title: 'Icons',
    link: ROOT_PATH + '/icons',
  }
]
