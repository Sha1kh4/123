import Clients from "@/components/clients";
import Coaches from "@/components/coaches";
import Hero from "@/components/hero";
import OurStory from "@/components/ourstory";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Hero />

      {/* <Experience /> */}
      <Clients />
      <OurStory />
      <Services />

      <Coaches />

      {/* Bottom Indicator (Rectangle 8) */}
    </>
  );
}
