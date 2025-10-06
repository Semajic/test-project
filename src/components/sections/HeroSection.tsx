"use client"
import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
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
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <Carousel
          opts={{ align: 'center' }}
          plugins={[Autoplay({ delay: 4500, stopOnInteraction: true })]}
          className="w-full max-w-md relative hover:scale-105 transition-all duration-300"
        >
          <CarouselContent>
            {React.useMemo(
              () =>
                [
                  {
                    id: 1,
                    title: 'Scale rapidly',
                    description:
                      'Bring on extra legal bandwidth exactly when you need it — no long-term hiring overhead.',
                    image: '/img1.png',
                  },
                  {
                    id: 2,
                    title: 'Stretch your budget',
                    description:
                      'Get senior-level legal expertise at a fraction of the cost of traditional hires or big firms.',
                    image: '/img2.png',
                  },
                  {
                    id: 3,
                    title: 'Specialist squads',
                    description:
                      'On-demand teams tailored to your case, sector, and workflow to deliver faster outcomes.',
                    image: '/img3.png',
                  },
                  {
                    id: 4,
                    title: 'Seamless handoffs',
                    description:
                      'Integrated knowledge transfer and collaboration so your in-house team stays productive.',
                    image: '/img4.png',
                  },
                ].map((slide) => (
                  <CarouselItem key={slide.id} className="basis-full">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col gap-4 items-center justify-center p-8">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-72 object-cover rounded-md"
                          />
                          <div className="text-center">
                            <h3 className="text-lg font-semibold">{slide.title}</h3>
                            <p className="text-sm text-muted-foreground">{slide.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )),
              []
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}