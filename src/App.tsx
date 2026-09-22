import { HeroSection } from './components/HeroSection';
import { OpportunitySection } from './components/OpportunitySection';
import { InteractivePreviewSlider } from './components/InteractivePreviewSlider';
import { CollectionSection } from './components/CollectionSection';
import { BenefitsSection } from './components/BenefitsSection';
import { IncludedVideoSection } from './components/IncludedVideoSection';
import { MarqueeCarousel } from './components/MarqueeCarousel';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BonusesSection } from './components/BonusesSection';
import { ExtraGallerySection } from './components/ExtraGallerySection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <main className="min-h-screen w-full bg-white text-[#0F172A] flex flex-col selection:bg-amber-300 selection:text-emerald-950 font-sans antialiased overflow-x-hidden">
      <HeroSection />
      <OpportunitySection />
      <InteractivePreviewSlider />
      <CollectionSection />
      <BenefitsSection />
      <IncludedVideoSection />
      <MarqueeCarousel />
      <TestimonialsSection />
      <BonusesSection />
      <ExtraGallerySection />
      <PricingSection />
      <GuaranteeSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}

