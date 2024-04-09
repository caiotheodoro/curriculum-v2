import ROUTES from "@/config/routes";

export const getNavbarMenu = (locale: string) => [
  {
    name: "about",
    path: `/${locale}${ROUTES.NAVBAR.ABOUT}`,
  },
  {
    name: "journey",
    path: `/${locale}${ROUTES.NAVBAR.JOURNEY}`,
  },
  {
    name: "projects",
    path: `/${locale}${ROUTES.NAVBAR.PROJECTS}`,
  },
];
