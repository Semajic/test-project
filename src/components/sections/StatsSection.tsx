import * as React from 'react'
import { Button } from '@/components/ui/button'

export default function StatsSection() {
  return (
  <section className="relative flex flex-col md:flex-row w-full h-full items-center justify-center transition-all duration-500 gap-8 px-8 py-12 md:px-16 md:py-32 pb-10 md:pb-28 text-left bg-primary/10 overflow-visible">
      {/* Text Section */}
      <div className="md:w-1/3 lg:w-1/3 w-full h-full text-left flex flex-col justify-center">
        <h2 className="text-4xl font-semibold mb-6 text-primary text-left">
          Uncertainty,{' '}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          meet confidence.
          </span>
        </h2>
        <p className="max-w-2xl mb-6 text-muted-foreground text-left">
          Strategically engage, integrate, and deploy top legal talent – exactly when and how you need it.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full min-w-full flex-wrap">
          <Button
            variant="default"
            className="h-12 px-6 text-base text-background font-extrabold uppercase tracking-wide rounded-full shadow-md hover:bg-primary/90 cursor-pointer w-auto"
          >
            FIND A LAWYER NOW
          </Button>
          <Button
            variant="ghost"
            className="group h-12 px-6 text-base text-foreground hover:text-primary font-extrabold uppercase tracking-wide rounded-full hover:bg-primary/10 cursor-pointer flex items-center gap-2 transition-all w-auto"
          >
            Learn More
            <span className="transition-transform duration-300 group-hover:translate-x-2 inline-block">
              {/* Arrow SVG */}
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path
            d="M5 10h10m0 0l-4-4m4 4l-4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
              </svg>
            </span>
          </Button>
        </div>
      </div>

      {/* Data Section */}
      <div className="md:w-2/3 lg:w-1/2 w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full">
          {[
          { value: "Up to 50% cost-savings, zero compromise on quality", label: "Drive massive value for your budget. Access talent with 18+ years average PQE, for up to 50% less than top law firms." },
          { value: "14,000+ legal professionals with proven experience", label: "Supercharge your team with embedded expertise honed at Big Law, the Fortune 500, and high-growth startups." },
          { value: "3,000+ annual engagements, tailored to each client’s needs", label: "Whether you need full-time, part-time, temp, or variable-rate talent, we’ll design an engagement to suit your business." },
          { value: "25+ years of client success and legal innovation", label: "Do more, with more confidence. At 96% client satisfaction, our tech-forward bench offers experience you can trust." },
          ].map((stat) => (
          <div key={stat.label} className="text-left gap-2 px-2 py-4 sm:py-0">
            <div className="text-xl font-bold text-primary pb-3">{stat.value}</div>
            <div className="text-muted-foreground text-sm">{stat.label}</div>
          </div>
          ))}
        </div>
      </div>
      {/* Decorative convex bow that protrudes down into the next section */}
    <div className="absolute left-0 right-0 -bottom-28 w-full overflow-visible pointer-events-none z-10">
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-28 fill-current text-primary/10"
        aria-hidden="true"
      >
        {/* Convex bow going down */}
        <path d="M0,0 L0,64 Q720,160 1440,64 L1440,0 Z" />
      </svg>
    </div>
    </section>
  )
}
