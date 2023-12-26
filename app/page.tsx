import { Urbanist } from "next/font/google";
import HeroSection from "@/components/container/HeroSection";
import CategoriesSection from "@/components/container/CategoriesSection";
import AboutSection from "@/components/container/AboutSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/container/CoursesSection";
import MajorCategoriesSection from "@/components/container/MajorCategoriesSection";
import CtaEventsSection from "@/components/container/CtaEventsSection";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={
          urbanist.className +
          " isolate w-full min-h-[100dvh] h-full max-w-screen-2xl mx-auto"
        }
      >
        <HeroSection />
        <CategoriesSection />
        <MajorCategoriesSection />
        <AboutSection />
        <CoursesSection/>
        <CtaEventsSection/>
      </main>
      <Footer />
    </>
  );
}
