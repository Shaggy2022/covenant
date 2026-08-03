import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import HeroSection from "../components/sections/HeroSection";
import IntroSection from "../components/sections/IntroSection";
import StorySection from "../components/sections/Story/StorySection";
import CountdownSection from "../components/sections/Countdown/CountdownSection";
import LocationSection from "../components/sections/Location/LocationSection";
import DressCodeSection from "../components/sections/DressCode/DressCodeSection";
import RSVPSection from "../components/sections/RSVP/RSVPSection";
import FooterSection from "../components/sections/Footer/FooterSection";
import GallerySection from "../components/sections/Gallery/GallerySection";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      {showIntro ? (
        <IntroSection />
      ) : (
          <>
            <HeroSection />
            <StorySection />
            <CountdownSection />
            <LocationSection />
            <GallerySection />
            <DressCodeSection />
            <RSVPSection />
            <FooterSection />
          </>
      )}
    </MainLayout>
  );
}