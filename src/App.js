// React Components
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import ProblemBanner from './components/ProblemBanner/ProblemBanner';
import TopicBanner from './components/TopicBanner/TopicBanner';
import InfoSection from './components/InfoSection/InfoSection';
import ActivitySection from './components/ActivitySection/ActivitySection';
import PrizeSection from './components/PrizeSection/PrizeSection';
import FAQ from './components/FAQ/FAQ';
import SponsorSection from './components/SponsorSection/SponsorSection';
import Footer from './components/Footer/Footer';

//=======================================//

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <ProblemBanner />
      <TopicBanner />
      <InfoSection />
      <ActivitySection />
      <PrizeSection />
      <FAQ />
      <SponsorSection />
      <Footer />
    </div>
  );
};

export default App;
