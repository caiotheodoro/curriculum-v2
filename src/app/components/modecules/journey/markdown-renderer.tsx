import { MarkdownProps } from "@/@types/molecules";
import Markdown from "markdown-to-jsx";

import Link from "next/link";
import { TweetCard } from "@/app/components/modecules/tweet-card/tweet-card";

export const MarkdownRenderer = ({
  options,
  className,
  ...rest
}: MarkdownProps) => {
  return (
    <Markdown
      options={{
        ...options,
        overrides: {
          a: ({ className, ...rest }) => <Link {...rest} />,
          p: ({ children }) => (
            <p className="mb-2 text-sm font-sans">{children}</p>
          ),
          img: ({ alt, src }) => (
            <span className="mt-2 block overflow-hidden rounded-xl border">
              <img
                alt={alt}
                src={`https:${src}`}
                width={400}
                height={300}
                loading="lazy"
                className="aspect-auto w-full animate-reveal object-cover"
              />
            </span>
          ),
          tweet: ({ id }) => <TweetCard id={id} />,
          div: ({ children }) => <div className="font-mono">{children}</div>,
        },
      }}
      {...rest}
    />
  );
};
