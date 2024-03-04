import { CarList, CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
          <p>Export the cars you might like</p>
        </div>

        <div className="home__fiter">
          <SearchBar/>
          <div className="home__filter-cotainer">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        <CarList/>
      </div>
    </main>
  );
}
