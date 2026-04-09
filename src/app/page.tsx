import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { Community } from "@/components/community";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Services />
        <CaseStudies />
        <Community />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
