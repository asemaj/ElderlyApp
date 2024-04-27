import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Slider1 from "@/components/Slider1";

import { withAuthenticator } from "@aws-amplify/ui-react";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Camp /> */}
      <Guide />
      <Slider1 />
      <Features />
      <GetApp />
      <Footer />
    </>
  )
}
