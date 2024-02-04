import { Header } from "@/components";
import AirlineSearch from "@/components/AirlineSearch";
import BestTripCountry from "@/components/BestTripCountry";
import Floating from "@/components/Floating";

export default function Home() {
  return (
    <>
      <Header />
      <Floating />
      <AirlineSearch />
      <BestTripCountry />
    </>
  );
}
