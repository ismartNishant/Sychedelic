
import Header from "@/components/Header/Header";
import SectionOne from "./Sections/SectionOne";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redefine Success. Join SychedelicCareers Today",
  description: "Sychedelic doesn’t hire employees—we seekvisionaries. If you’re beyond ordinary, join us andredefine what’s possible. Apply now!",
};


export default function AboutUs() {
  return (
    <main>
      <Header />
      <SectionOne />
      <Footer />
    </main>
  );
}
