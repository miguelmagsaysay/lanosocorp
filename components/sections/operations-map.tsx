"use client";

import dynamic from "next/dynamic";

export const OperationsMap = dynamic(() => import("./operations-map-inner"), {
  ssr: false,
  loading: () => (
    <div
      className="h-[400px] w-full animate-pulse rounded-xl bg-stone-200 sm:h-[460px] lg:h-[520px]"
      aria-hidden
    />
  ),
});
