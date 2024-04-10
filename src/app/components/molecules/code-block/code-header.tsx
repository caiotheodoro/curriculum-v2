import { CodeHeaderProps } from "@/@types/molecules";
import { CodeDots } from "@/app/components/molecules/code-block/code-dots";
import { CodeCopyButton } from "@/app/components/molecules/code-block/code-button";

export const CodeHeader = ({ title, code }: CodeHeaderProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-lg border dark:bg-stone-950  bg-gray-100  py-1.5 pl-4 pr-2">
      <div className="flex items-center gap-4">
        <CodeDots />
        {title && (
          <p className="m-0 text-sm font-medium text-foreground">{title}</p>
        )}
      </div>
      <CodeCopyButton code={code} />
    </div>
  );
};
