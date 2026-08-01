import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import About from "@/components/about";
import SubscriptionLetter from "@/components/subscribtionLetter";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

const HomePage = () => {
  return (
    <div className="w-full relative flex flex-col">
      <section className="w-full">
        <Hero />
      </section>

      <section className="w-full">
        <About />
      </section>

      <section className="w-full">
        <HowItWorks />
      </section>

      <section className="w-full">
        <Testimonials />
      </section>

      <section className="w-full">
        <Features />
      </section>

      <section className="w-full">
        <SubscriptionLetter />
      </section>

      <section className="w-full">
        <CTA />
      </section>
    </div>
  );
};

export default HomePage;
