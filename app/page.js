import {
  DarkValueSection,
  FinalCta,
  Hero,
  ServicesPreview,
  StatsStrip,
  Testimonials,
} from '@/components/sections';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <ServicesPreview />
      <DarkValueSection />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
