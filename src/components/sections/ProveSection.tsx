import * as React from 'react'
import { Button } from '@/components/ui/button'
import { CarouselSizes } from '@/components/ui/carousel'

export default function ProveSection() {
  return (
    <section className="w-full mx-auto flex flex-col items-center mt-12 mb-18 py-24 pb-8 md:py-28 px-8 transition-all duration-500">
      <h2 className="text-4xl font-regular mb-6 text-center text-foreground ">The right legal talent, right when you need it.</h2>
      <p className="text-center text-lg text-muted-foreground mb-6 max-w-2xl">
      Scale your team with proven legal professionals who set a higher bar for quality: Only the top{' '}
      <span className="font-extrabold text-lg text-primary">3%</span>
      {' '}of applicants are hired to Axiom’s bench.
      </p>

      <div className="w-full flex justify-center mt-6 min-h-[220px]">
        {/* Reserve space for carousel to reduce CLS */}
        <CarouselSizes />
      </div>

      <div className="w-full justify-center flex flex-row gap-4 px-8 mt-8 flex-wrap transition-all duration-300">
        <Button variant="default" className="h-12 px-6 md:px-16 uppercase text-base text-background font-extrabold uppercase tracking-wide rounded-full shadow-md hover:bg-primary/90 cursor-pointer transition-all duration-300">
          Find a Lawyer Now
        </Button>
        <Button variant="outline" className="h-12 px-6 md:px-16 uppercase text-base text-primary font-extrabold uppercase tracking-wide rounded-full shadow-md border-primary hover:bg-primary hover:text-background cursor-pointer transition-all duration-300">
          Talk to Our Team
        </Button>
      </div>
    </section>
  )
}
