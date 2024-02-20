import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function CardSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={345} height={200} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={345} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={345} />
    </Stack>
  );
}
