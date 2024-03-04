import { fetchCars } from "@/utils"
import { CarCard } from "."

async function CarList() {
  const allCars = await fetchCars()
  const isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars 

  return (
    <>
    {!isDataEmpty ? (
      <section>
        <div className="home__cars-wrapper">
         {allCars?.map((car, index) => (
          <CarCard car={car} key={index}/>
         ))}
        </div>
      </section>
    ):(
      <div className="home__error-container">
        <h2 className="text-black text-xl font-bold">Oops, no results</h2>
        <p>{allCars?.message}</p>
      </div>
    )}
    </>
  )
}

export default CarList