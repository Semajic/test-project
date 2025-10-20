import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Hero() {
  return (
     <div className="flex flex-wrap w-full h-full items-center bg-muted justify-center flex-col md:flex-row lg:flex-row sm:flex-col transition-all duration-500 p-8 sm:p-8 md:p-16 py-28 text-left gap-8 font-poppins">
      <div className="md:w-2/3 lg:w-1/2 w-full h-full text-left flex-col">
        <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl bg text-foreground drop-shadow-lg leading-tight">
          What We Do
        </h1>
        <h4 className="font-semibold mt-4 text-muted-foreground">Axiom is where businesses and legal teams go to find high-caliber legal talent for everything from everyday in-house tasks to complex in-house and outside counsel work—for less.</h4>

        <div className="flex flex-row flex-wrap gap-4 mt-8">
          <Button variant="default" className="h-12 px-6 w-full sm:w-auto text-base text-background font-extrabold uppercase tracking-wide rounded-full shadow-md hover:bg-primary/90 cursor-pointer">
            Find a Lawyer Now
          </Button>
          <Button variant="outline" className="h-12 px-6 w-full sm:w-auto text-base text-primary font-extrabold uppercase tracking-wide rounded-full shadow-md border-primary hover:bg-primary hover:text-background cursor-pointer">
            Talk to Our Team
          </Button>
        </div>
      </div>
      <div className="md:w-2/3 lg:w-1/3 w-full h-full flex items-center justify-center">
        <Card className="bg-background shadow-md border-none rounded-lg p-8 pb-12 text-center max-w-6xl mx-auto">
          <h2 className="m-0 text-2xl font-semibold text-foreground">Main Card Title</h2>
          <p className="mt-4 text-lg text-foreground/90">This is the main card content. You can add more details or actions here.</p>
        </Card>
      </div>
    </div>
  );
}