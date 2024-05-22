import Skeleton from "@/components/Skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col gap-y-4 pt-28">
      <Skeleton className="h- w-[550px]" />
      <Skeleton className="h- w-[400px]"/>
      <Skeleton className="h- w-[430px]"/>
     
    </div>
  );
};

export default loading;
