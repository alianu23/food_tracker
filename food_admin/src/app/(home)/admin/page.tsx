"use client";
import AdminView from "@/components/sections/adminView";

import * as React from "react";

const AdminPage = () => {
  return (
    <React.Suspense fallback={<p>Loading Category Page...</p>}>
      <AdminView />
    </React.Suspense>
  );
};

export default AdminPage;
