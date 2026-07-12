import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Trusted from "@/components/Trusted/Trusted";
import Features from "@/components/Features/Features";
import Templates from "@/components/Templates/Templates";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <Templates />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}