import React from "react";
import CardSkeleton from "./CardSkeleton";

type Props = {};

const CardSkeletonRow = (props: Props) => {
  let counter = 0;
  return (
    <div className="flex gap-4 flex-wrap">
      {Array.from(new Array(3)).map((el) => {
        return <CardSkeleton key={counter++} />;
      })}
    </div>
  );
};

export default CardSkeletonRow;
