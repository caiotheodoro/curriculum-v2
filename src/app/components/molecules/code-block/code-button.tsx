import { Button } from "@/app/components/ui/button";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const CodeCopyButton = ({ code }: { code: string }) => {
  const t = useTranslations("about");
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
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
  );
};
