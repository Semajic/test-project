import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Hero from "@/app/about/what-we-do/components/Hero";
import Prove from "@/app/about/what-we-do/components/Prove";

export default function WhatWeDoPage() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center text-center font-poppins">
      <Hero />
      <Prove />
    </main>
  );
}