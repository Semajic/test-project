import { Navbar02 } from '@/components/ui/shadcn-io/navbar-02';
// Card components intentionally not imported here; keep page focused on hero/testimonials. Import where needed in other pages/components.
import heroImage from "../../public/restaurantbg.png";
import vercelLogo from "../../public/vercel.svg";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// imageData removed (not currently used). Use next/image with reserved container sizes for galleries/carousels to avoid CLS.

const testimonials = [
  {
    quote: "Absolutely wonderful experience! The food and atmosphere were perfect.",
    author: "— Alex P.",
  },
  {
    quote: "Studio Null exceeded all my expectations. Highly recommended!",
    author: "— Jamie L.",
  },
  {
    quote: "A must-visit spot. The staff made us feel right at home.",
    author: "— Morgan S.",
  },
];

function HeroSection() {
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
          <Button variant="default">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <div className="relative w-full h-64 md:h-96 lg:h-[420px]">
          <Image src={heroImage} alt="Hero Image" fill className="object-cover rounded-md" priority />
        </div>
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="flex flex-wrap w-full h-full items-center justify-center flex-col md:flex-row lg:flex-row sm:flex-col transition-all duration-500 p-8 sm:p-8 md:p-16 text-left gap-8 bg-primary/10 overflow-hidden">
      <div className="md:w-2/3 lg:w-1/2 w-full h-full text-left flex-col">
        <h2 className="text-3xl font-semibold mb-6 text-primary text-left">
          Uncertainty,{' '}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            meet confidence.
          </span>
        </h2>
        <p className="max-w-2xl mb-6 text-muted-foreground text-left">
          Strategically engage, integrate, and deploy top legal talent – exactly when and how you need it.
        </p>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="w-full max-w-4xl mx-auto mt-12 mb-18 px-8 transition-all duration-500">
      <h2 className="text-3xl font-semibold mb-6 text-center text-primary">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-card rounded-lg shadow p-6">
            <p className="italic mb-4 text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="font-bold text-secondary-foreground">{testimonial.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full h-24 flex items-center justify-center border-t">
      <a
        className="flex items-center justify-center gap-2"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className="h-6 ml-2 block relative w-[72px] h-[16px]">
          <Image src={vercelLogo} alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      {/* Navbar */}
      <div className="relative w-full font-poppins">
        <Navbar02 />
      </div>

      {/* Main content */}
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center font-poppins">
        <HeroSection />
        <StatsSection />
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
