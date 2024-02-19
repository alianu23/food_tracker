"use client";
import AppView from "@/components/sections/appView";
import React from "react";

export default function Dashboard() {
  return (
    <React.Suspense fallback={<p>Loading dashboard...</p>}>
      <AppView />
    </React.Suspense>
  );
}
