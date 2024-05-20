import React from "react";

type ContainerProps = {
    children: React.ReactNode;
}

const Container = ({ children }:ContainerProps) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-white/[7%] flex flex-col">
      {children}
    </div>
  );
};

export default Container;
