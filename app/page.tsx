import Header from "@/components/ui/Header";
import Hero from "@/components/sections/Hero";
import BookingBar from "@/components/sections/BookingBar";
import Services from "@/components/sections/Services";
import Accommodations from "@/components/sections/Accommodations";
import Process from "@/components/sections/Process";
import Prices from "@/components/sections/Prices";
import WhyUs from "@/components/sections/WhyUs";
import Team from "@/components/sections/Team";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <div id="top" /> 
    <Header />
<Hero />
<BookingBar />
<Services />
<Accommodations />
<WhyUs />
<Reviews />
<FAQ />
<Gallery />
<Contact />
<Footer />

    </main>
  );
}
