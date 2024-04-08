import { Skeleton } from "@/app/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Suspense } from "react";
import { FloatingHeader } from "../../modecules/floating-header/floating-header";
import { PageTitle } from "../../modecules/page-title/page-title";
import { PlusIcon } from "lucide-react";
import { JourneyCard } from "../../modecules/journey/journey-card";
import { JourneyCardProps } from "@/@types/molecules";

export default async function Journey() {
  const allLogbook = [
    {
      year: 2024,
      logs: [
        {
          title: "A new Workspace page",
          description: `<p>I've just launched a brand new Workspace page! It's a place where I can highlight all the amazing products that I use every day to boost my productivity. If you're interested, you can check it out here.</p>`,
        },
        {
          title: "Second Log",
          description: `<p>This is my second log. I'm excited to continue this journey.</p>`,
        },
        {
          title: "Second Log",
          description: `<p>This is my second log. I'm excited to continue this journey.</>`,
        },
      ] as JourneyCardProps[],
    },
  ];

  return (
    <ScrollArea>
      <FloatingHeader scrollTitle="Journey" />
      <div className="content-wrapper">
        <div className="content flex m-auto justify-center">
          <div>
            <PageTitle title="Journey" />
            <Suspense fallback={<Skeleton />}>
              <div className={"flex flex-col items-stretch gap-12"}>
                {allLogbook.map((item, itemIndex) => (
                  <div
                    key={item.year}
                    className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12"
                  >
                    <div className="flex items-center">
                      <h2>{item.year}</h2>
                      <hr className="my-0 ml-4 flex-1 border-dashed border-gray-200" />
                    </div>
                    <section>
                      {item.logs.map((log, logIndex) => (
                        <div
                          key={log.title}
                          className="relative flex pb-8 last:pb-0"
                        >
                          {logIndex !== item.logs.length - 1 && (
                            <div className="absolute inset-0 flex w-6 items-center justify-center">
                              <div className="pointer-events-none h-full w-px border-l-[1px] border-gray-200"></div>
                            </div>
                          )}
                          <div className="z-0 flex h-6 w-6 shrink-0 items-center justify-center rounded-full dark:bg-white bg-black align-middle dark:text-black text-white">
                            <PlusIcon size={16} />
                          </div>
                          <div className="flex-grow pl-8">
                            <JourneyCard
                              {...log}
                              index={logIndex}
                              image={{
                                ...(log?.image || null),
                                alt: log.title,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </section>
                  </div>
                ))}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
