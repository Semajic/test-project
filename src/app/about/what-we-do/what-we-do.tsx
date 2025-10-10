import React from "react";
import { Button } from "@/components/ui/button";

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <section className="w-full flex flex-row items-center bg-muted p-8">
        <div className="w-2/3 h-full">
          <h1 className="text-4xl font-semibold">What We Do</h1>
          <h5 className="text-2xl font-semibold mt-4 text-muted-foreground">Axiom is where businesses and legal teams go to find high-caliber legal talent for everything from everyday in-house tasks to complex in-house and outside counsel work—for less.</h5>

          <div className="flex flex-row gap-4 mt-8">
            <Button variant="default">Find a Lawyer Now</Button>
            <Button variant="outline">Talk to Our Team</Button>
          </div>
        </div>
      </section>
    </main>
  );
}