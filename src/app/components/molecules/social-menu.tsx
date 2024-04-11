import { socialMenu } from "@/utils/social/menu";
import { SocialNav } from "@/app/components/atoms/social-nav";
import { createElement } from "react";

export const SocialMenu = () => {
  return (
    <div className="fixed right-3 bottom-3">
      <div className="flex flex-col items-end gap-1 dark:bg-gray-600 bg-gray-200 p-1 rounded-xl">
        {socialMenu.map((item) => (
          <SocialNav key={item.name} href={item.path} aria-label={item.name}>
            {createElement(item.icon, { size: "1.125rem" })}
          </SocialNav>
        ))}
      </div>
    </div>
  );
};
