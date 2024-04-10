"use client";

import { useEffect, useRef } from "react";
import { highlight } from "sugar-high";
import { CodeHeaderProps } from "@/@types/molecules";
import { CodeHeader } from "@/app/components/molecules/code-block/code-header";

export function CodeBlock({ title, code }: Readonly<CodeHeaderProps>) {
  const codeRef = useRef<HTMLElement | null>(null);
  const codeHTML = highlight(code);

  useEffect(() => {
    const codeElem = codeRef.current;
    if (!codeElem) return;
    codeElem.innerHTML = codeHTML;
  }, [codeHTML]);

  return (
    <>
      <CodeHeader code={code} title={title} />
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
