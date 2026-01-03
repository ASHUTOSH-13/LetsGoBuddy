import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedToursSection } from '@/components/home/FeaturedToursSection';
import { WhyTravelSection } from '@/components/home/WhyTravelSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedToursSection />
      <WhyTravelSection />
    </>
  );
}
