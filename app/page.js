import { ColumLayout, HeroSection } from "./components/Sections";
import FeatureSection from "./components/Sections/FeatureSection";
import PriceSection from "./components/Sections/PriceSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection data={'Hero Section'}/>
      <FeatureSection />
      {
        [1,2,3].map((item, index) => <ColumLayout key={index} data={item}/>)
      }
      <PriceSection />
    </main>
  );
}
