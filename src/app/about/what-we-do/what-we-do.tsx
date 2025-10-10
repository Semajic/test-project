import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background transition-all duration-300 font-poppins">
      <section className="w-full flex flex-row items-center bg-muted p-8 gap-8">
        <div className="w-2/3 h-full">
          <h1 className="text-4xl font-semibold">What We Do</h1>
          <h4 className="font-semibold mt-4 text-muted-foreground">Axiom is where businesses and legal teams go to find high-caliber legal talent for everything from everyday in-house tasks to complex in-house and outside counsel work—for less.</h4>

          <div className="flex flex-row gap-4 mt-8">
            <Button variant="default" className="h-12 px-6 text-base text-background font-extrabold uppercase tracking-wide rounded-full shadow-md hover:bg-primary/90 cursor-pointer">
              Find a Lawyer Now
            </Button>
            <Button variant="outline" className="h-12 px-6 text-base text-primary font-extrabold uppercase tracking-wide rounded-full shadow-md border-primary hover:bg-primary hover:text-background cursor-pointer">
              Talk to Our Team
            </Button>
          </div>
        </div>
        <div className="w-1/3 h-full flex items-center justify-center">
          <Card className="bg-background shadow-none border-none rounded-lg p-8 pb-12 text-center max-w-6xl mx-auto">
            <h2 className="m-0 text-2xl font-semibold text-foreground">Main Card Title</h2>
            <p className="mt-4 text-lg text-foreground/90">This is the main card content. You can add more details or actions here.</p>
          </Card>
        </div>
      </section>
    </main>
  );
}