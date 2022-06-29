import React from "react";
import { useHome } from "./useHome";

export default function Home() {
  const { name } = useHome();

  return (
    <>
      <div>Welcome, {name}!</div>
    </>
  );
}
