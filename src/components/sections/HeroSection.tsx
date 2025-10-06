"use client"
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { CarouselPlugin } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

// ...existing code...
export default function HeroSection() {
  return (
    <div
      className="flex flex-wrap w-full h-full items-center justify-center flex-col md:flex-row lg:flex-row sm:flex-col transition-all duration-500 p-8 sm:p-8 md:p-16 text-left gap-8"
    >
      <div className="md:w-2/3 lg:w-1/2 w-full h-full text-left flex-col">
        <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl bg text-foreground drop-shadow-lg leading-tight">
          Amplify your team with elite legal talent, minus the elite fees.
        </h1>
        <p className="sm:text-sm md:text-base lg:text-lg text-muted-foreground text-left py-4">
          Whether you need to scale quickly or stretch limited resources, Axiom’s flexible engagements help you do more for less.
        </p>
        <div className="flex flex-row gap-4">
          <Button variant="default" className="h-12 px-6 text-base text-background font-extrabold uppercase tracking-wide rounded-full shadow-md hover:bg-primary/90 cursor-pointer">
            Get Started
          </Button>
          <Button variant="outline" className="h-12 px-6 text-base text-primary font-extrabold uppercase tracking-wide rounded-full shadow-md border-primary hover:bg-primary hover:text-background cursor-pointer">
            Learn More
          </Button>
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <CarouselPlugin />
      </div>
    </div>
  )
}