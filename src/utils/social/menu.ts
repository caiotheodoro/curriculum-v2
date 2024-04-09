import ROUTES from "@/config/routes";
import {  FileTextIcon, Github, Linkedin, Mail } from "lucide-react";

export const socialMenu = [
  {
    name: "github",
    path: ROUTES.SOCIAL.GITHUB,
    icon: Github,
  },
  {
    name: "linkedin",
    path: ROUTES.SOCIAL.LINKEDIN,
    icon: Linkedin,
  },
  {
    name: "mail",
    path: ROUTES.SOCIAL.MAIL,
    icon:Mail,
  },
  {
    name: "resume",
    path: ROUTES.SOCIAL.PHONE,
    icon: FileTextIcon,
  }
]