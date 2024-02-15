import { Header } from "@/components";
import AirlineSearch from "@/components/AirlineSearch";
import BestTrip from "@/components/BestTrip";
import BestTripCountry from "@/components/BestTripCountry";
import Floating from "@/components/Floating";
import Footer from "@/components/Footer";
import MilkyWay from "@/components/MilkyWay";
import QuizNav from "@/components/QuizNav";
import TripCSSProvider from "@/context/TripCSSContext";

export default function Home() {
  return (
    <TripCSSProvider>
      <QuizNav />

      <Header />
      <Floating />
      <AirlineSearch />
      <BestTripCountry />
      <BestTrip />
      <MilkyWay />
      <Footer />
    </TripCSSProvider>
  );
}
