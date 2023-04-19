"use client";
import { HomePage } from "./home/page";
import "../src/styles/global.scss";
import { GlobalProvider } from "@/src/contexts/Global";

export default function Home() {
  return (
    <GlobalProvider>
      <HomePage />
    </GlobalProvider>
  );
}
