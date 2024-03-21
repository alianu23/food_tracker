"use client";
import dynamic from "next/dynamic";

const AppView = dynamic(() => import("@/components/sections/appView"), {
  ssr: false,
});

export default function Dashboard() {
  return <AppView />;
}
