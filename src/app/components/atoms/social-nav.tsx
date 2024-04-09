import { ChildProps } from "@/@types/common";
import Link, { LinkProps } from "next/link";

export const SocialNav = ({ children, ...pops }: LinkProps & ChildProps) => {
  return (
    <Link
      target="_blank"
      className="p-3 dark:hover:bg-slate-800 hover:bg-slate-100 transition-colors rounded-xl"
      {...pops}
    >
      {children}
    </Link>
  );
};
