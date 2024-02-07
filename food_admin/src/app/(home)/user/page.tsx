"use client";
import UserView from "@/components/sections/userView";
import * as React from "react";

const UserPage = () => {
  return (
    <React.Suspense fallback={<p>Loading User Page...</p>}>
      <UserView />
    </React.Suspense>
  );
};

export default UserPage;
