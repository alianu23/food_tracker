"use client";
import * as React from "react";
import AppView from "@/components/sections/appView";

const DashboardPage = () => {
  return (
    <React.Suspense fallback={<p>Loading dashboard...</p>}>
      <AppView />
    </React.Suspense>
  );
};

export default DashboardPage;
