import { Header } from "@/components";
import AirlineSearch from "@/components/AirlineSearch";
import BestTripCountry from "@/components/BestTripCountry";
import Floating from "@/components/Floating";
import BestTrip from "@/components/BestTrip";

export default function Home() {
  return (
    <>
      <Header />
      <Floating />
      <AirlineSearch />
      <BestTripCountry />
      <BestTrip />
    </>
  );
}
