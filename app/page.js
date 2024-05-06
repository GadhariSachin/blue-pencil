import { ColumLayout, HeroSection } from "./components/Sections";
import FeatureSection from "./components/Sections/FeatureSection";
import PriceSection from "./components/Sections/PriceSection";
import { SECTIONS } from "./utils/constants";

export default function Home() {
  return (
    <main className="">
      <HeroSection data={'Hero Section'}/>
      <FeatureSection />
      {
        SECTIONS.map((section, index) => <ColumLayout key={`section-${index}`} data={section}/>)
      }
      <PriceSection />
    </main>
  );
}
