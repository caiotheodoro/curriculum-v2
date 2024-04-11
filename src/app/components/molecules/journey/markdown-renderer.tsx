import { MarkdownProps } from "@/@types/molecules";
import Markdown from "markdown-to-jsx";

import { TweetCard } from "@/app/components/molecules/tweet-card/tweet-card";
import Image from "next/image";
import { Link } from "../../atoms/link";

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
          a: ({ className, ...rest }) => <Link className={`font-inter text-sm flex gap-1 ${className}`} {...rest}  />,
          p: ({ children }) => (
            <p className="mb-2 text-sm font-sans flex gap-1">{children}</p>
          ),
          img: ({ alt, src }) => (
            <span className="mt-2 block overflow-hidden rounded-xl border">
              <Image
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
