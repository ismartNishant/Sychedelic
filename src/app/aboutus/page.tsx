
import Header from "@/components/Header/Header";
import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story – The Mission BehindSychedelic",
  description: "Sychedelic uses tech to boost focus, productivity,and sleep. Take control of your mind, emotions, andpotential. Join the movement for transformation.",
};


export default function AboutUs() {
  return (
    <main>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </main>
  );
}
