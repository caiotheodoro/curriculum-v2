"use client";

import { memo, useEffect, useState } from "react";

import { SCROLL_AREA_ID, MOBILE_SCROLL_THRESHOLD } from "@/lib/contants";

export const FloatingHeader = memo(
  function FloatingHeader({
    scrollTitle,
    title,
    goBackLink,
    children,
  }: {
    scrollTitle?: string;
    title?: string;
    goBackLink?: string;
    children?: React.ReactNode;
  }) {
    const [transformValues, setTransformValues] = useState({
      translateY: 0,
      opacity: scrollTitle ? 0 : 1,
    });

    useEffect(() => {
      const scrollAreaElem = document.querySelector(`#${SCROLL_AREA_ID}`);

      const onScroll = (e: { target: { scrollTop: number } }) => {
        const scrollY = e.target.scrollTop;
        const mobileThreshold = Number(MOBILE_SCROLL_THRESHOLD);
        const translateY = Math.max(100 - scrollY, 0);
        const opacity = Math.min(
          Math.max(
            (scrollY -
              mobileThreshold * (mobileThreshold / (scrollY ** 2 / 100))) /
              100,
            0
          ),
          1
        );

        setTransformValues({ translateY, opacity: Number(opacity.toFixed(2)) });
      };

      if (scrollTitle) {
        scrollAreaElem?.addEventListener(
          "scroll",
          onScroll as unknown as EventListener,
          {
            passive: true,
          }
        );
      }
      return () =>
        scrollAreaElem?.removeEventListener(
          "scroll",
          onScroll as unknown as EventListener
        );
    }, [scrollTitle]);

    return (
      <header className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden   text-sm font-medium lg:hidden">
        <div className="flex h-full w-full items-center px-3">
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex flex-1 items-center justify-between">
              {scrollTitle && (
                <span
                  className="line-clamp-2 font-semibold tracking-tight"
                  style={{
                    transform: `translateY(${transformValues.translateY}%)`,
                    opacity: transformValues.opacity,
                  }}
                >
                  {scrollTitle}
                </span>
              )}
              {title && (
                <span className="line-clamp-2 font-semibold tracking-tight">
                  {title}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }
);
