import React from "react";
import { Button } from "@/components/ui/button";

export default function Prove() {
    return (
        <div className="flex flex-wrap w-full h-full items-center justify-center flex-col md:flex-row lg:flex-row sm:flex-col transition-all duration-500 p-8 sm:p-8 md:p-16 py-28 text-left gap-8 font-poppins">
            <div className="md:w-1/3 lg:w-1/3 w-full h-full text-left flex-col">
                <h1 className=" text-3xl font-semibold">
                    We deploy legal talent based on your needs, at 
                    <span className="font-extrabold text-3xl text-primary"> up to 50% lower rates </span>
                    {' '} than Am Law 200 law firms.
                </h1>
                
                <div className="flex flex-row flex-wrap gap-4 mt-8">
                    <Button variant="default" className="h-12 px-6 w-full sm:w-auto text-base text-background font-extrabold uppercase tracking-wide rounded-full shadow-md hover:bg-primary/90 cursor-pointer">
                        Find a Lawyer Now
                    </Button>
                    <Button variant="outline" className="h-12 px-6 w-full sm:w-auto text-base text-primary font-extrabold uppercase tracking-wide rounded-full shadow-md border-primary hover:bg-primary hover:text-background cursor-pointer">
                        Talk to Our Team
                    </Button>
                </div>
            </div>

            <div className="md:w-2/3 lg:w-2/3 w-full h-full flex items-center justify-center">
                <ul className="bg-background shadow-md border-none rounded-lg p-8 pb-12 text-center max-w-6xl mx-auto">
                    <h2 className="m-0 text-2xl font-semibold text-foreground">Main Card Title</h2>
                    <p className="mt-4 text-lg text-foreground/90">This is the main card content. You can add more details or actions here.</p>
                </ul>
            </div>
        </div>
    );
}