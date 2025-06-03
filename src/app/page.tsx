"use client";
import { useEffect } from "react";
import UsersProfile from "./users/page";
import ProductProfile from "./product/page";
import GreetingMessage from "./greeting/page";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => console.log("scope is: ", registration.scope));
    }
  }, []);
  return (
    <>
      <UsersProfile />
      <ProductProfile />
      <GreetingMessage />
    </>
  );
}
