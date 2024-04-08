export const getNavbarMenu = (locale: string) => [
  {
    name: "about",
    path: `/${locale}/`,
  },
  {
    name: "journey",
    path: `/${locale}/about`,
  },
  {
    name: "projects",
    path: `/${locale}/projects`,
  },
];
