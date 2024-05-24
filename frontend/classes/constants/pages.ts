export const ROUTES = {
  INDEX: 'index',
  POSTS: 'posts',
  ABOUT: 'about',
  CONTACT: 'contact',
}

export const PAGES = {
  [ROUTES.INDEX]: {
    id: 1,
    name: ROUTES.INDEX,
    title: 'Home',
    href: '/',
  },
  [ROUTES.POSTS]: {
    id: 2,
    name: ROUTES.POSTS,
    title: 'Posts',
    href: '/posts',
  },
  [ROUTES.ABOUT]: {
    id: 3,
    name: ROUTES.ABOUT,
    title: 'About',
    href: '/about',
  },
  [ROUTES.CONTACT]: {
    id: 4,
    name: ROUTES.CONTACT,
    title: 'Contact',
    href: '/contact',
  },
}
