"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// ----------------------------------------------------------------------

export function useScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
