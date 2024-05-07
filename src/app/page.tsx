import Blogs from "@/components/Blogs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import ProductFeatures from "@/components/ProductFeatures";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Testimonials from "@/components/Testimonials";
import Trusted from "@/components/Trusted";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Trusted />
      <Features />
      <Section1 />
      <Section2 />
      <ProductFeatures />
      <Integrations />
      <Blogs />
      <Testimonials />
      <GetStarted />
      <Footer />
    </main>
  );
}
