import { Navbar02 } from '@/components/ui/shadcn-io/navbar-02';
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ProveSection from '@/components/sections/ProveSection'
import ServicesSection from '@/components/sections/ServicesSection'
import StatsRepriseSection from '@/components/sections/StatsRepriseSection'
import Footer from '@/components/ui/footer'

// Footer is now in a separate component: src/components/ui/footer.tsx

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
        <ProveSection />
        <ServicesSection />
        <StatsRepriseSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
