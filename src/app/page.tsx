import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from "../../public/restaurantbg.png";

const imageData = [
  { src: "/img1.png", alt: "Image 1" },
  { src: "/img2.png", alt: "Image 2" },
  { src: "/img3.png", alt: "Image 3" },
  { src: "/img4.png", alt: "Image 4" },
  { src: "/img5.png", alt: "Image 5" },
  { src: "/img6.png", alt: "Image 6" },
  { src: "/img7.png", alt: "Image 7" },
  { src: "/img8.png", alt: "Image 8" },
];

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
      className="flex w-full items-center justify-center"
      style={{
        backgroundImage: `url(${Image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '95vh',
        width: '100vw',
        overflow: 'visible',
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center drop-shadow-lg">
        Welcome to Studio Null
      </h1>
    </div>
  );
}

function GallerySection() {
  return (
    <section className="w-full mx-auto mb-12 px-4 bg-muted p-6 items-center">
      <span className="flex justify-center p-0 gap-6 flex-row w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center text-primary">Gallery</h2>
        <Button variant="link" className="text-sm font-medium px-4 h-9 rounded-md shadow-sm">View All</Button>
      </span>
      <div className="hidden md:block">
        <Carousel className="w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto" orientation="horizontal">
          <CarouselContent>
        {imageData.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-2">
          <Card>
            <CardContent className="flex items-center justify-center px-10 py-4">
              <img
            src={img.src}
            alt={img.alt}
            className="object-cover w-full h-full rounded-md"
              />
            </CardContent>
          </Card>
            </div>
          </CarouselItem>
        ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="w-full max-w-4xl mx-auto mt-12 mb-18 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-center text-primary">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-card rounded-lg shadow p-6">
            <p className="italic mb-4 text-muted-foreground">"{testimonial.quote}"</p>
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
        <span className="h-6 ml-2">
          <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
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
        <Navbar01 />
      </div>

      {/* Main content */}
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center font-poppins">
        <HeroSection />
        <GallerySection />
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
