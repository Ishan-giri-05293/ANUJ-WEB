import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProblemSection } from '@/components/ProblemSection';
import { LearningSection } from '@/components/LearningSection';
import { LiveWorkshop } from '@/components/LiveWorkshop';
import { AudienceSection } from '@/components/AudienceSection';
import { InstructorSection } from '@/components/InstructorSection';
import { PricingSection } from '@/components/PricingSection';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <LearningSection />
        <LiveWorkshop />
        <AudienceSection />
        <InstructorSection />
        <PricingSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
