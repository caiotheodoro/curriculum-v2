"use client";

import { useEffect, useState, useRef } from "react";
import { highlight } from "sugar-high";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { useTranslations } from "next-intl";
import { Check, Copy } from "lucide-react";
import { CodeHeaderProps } from "@/@types/molecules";

export function CodeBlock({ title, code }: Readonly<CodeHeaderProps>) {
  const codeRef = useRef<HTMLElement | null>(null);
  const t = useTranslations("about");
  const [copied, setCopied] = useState(false);
  const codeHTML = highlight(code);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => setCopied(false), 3000);
  };

  useEffect(() => {
    const codeElem = codeRef.current;
    if (!codeElem) return;
    codeElem.innerHTML = codeHTML;
  }, [codeHTML]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-lg border dark:bg-stone-950  bg-gray-100  py-1.5 pl-4 pr-2">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-800" />
            <span className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-800" />
            <span className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-800" />
          </span>
          {title && (
            <p className="m-0 text-sm font-medium text-foreground">{title}</p>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg text-xs"
          disabled={copied}
          onClick={onCopy}
        >
          <LazyMotion features={domAnimation}>
            <m.span
              key={copied ? "copied" : "copy"}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              className="inline-flex w-15 items-center justify-center gap-0.5"
              transition={{ duration: 0.3 }}
            >
              {copied ? (
                <>
                  <Check className="mr-0.5" size={14} />
                  {t("copied")}
                </>
              ) : (
                <>
                  <Copy size={14} className="mr-0.5" />
                  {t("copy")}
                </>
              )}
            </m.span>
          </LazyMotion>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <pre>
          <code
            ref={codeRef}
            className="sh__line lg:text-base md:text-sm sm:text-xs text-xs"
          />
        </pre>
      </div>
    </>
  );
}
