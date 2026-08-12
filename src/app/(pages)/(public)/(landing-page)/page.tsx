import { Stack } from "@mantine/core";
import Faqs from "@/features/landing-page/components/Faqs";
import Features from "@/features/landing-page/components/Features";
import GetInTouch from "@/features/landing-page/components/GetInTouch";
import HeroSection from "@/features/landing-page/components/HeroSection";
import MissionVision from "@/features/landing-page/components/MissionVision";
import Partners from "@/features/landing-page/components/Partners";
import Statistics from "@/features/landing-page/components/Statistics";
import TheCreator from "@/features/landing-page/components/TheCreator";

const LandingPage = () => {
  return (
    <Stack gap={"lg"}>
      <HeroSection />
      <Features />
      <Statistics />
      <Partners />
      <MissionVision />
      <Faqs />
      <TheCreator />
      <GetInTouch />
    </Stack>
  );
};

export default LandingPage;
