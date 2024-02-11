import { Header } from "@/components";
import AirlineSearch from "@/components/AirlineSearch";
import BestTrip from "@/components/BestTrip";
import BestTripCountry from "@/components/BestTripCountry";
import Floating from "@/components/Floating";
import QuizNav from "@/components/QuizNav";

export default function Home() {
  return (
    <>
      <QuizNav />
      <Header />
      <Floating />
      <AirlineSearch />
      <BestTripCountry />
      <BestTrip />
    </>
  );
}
