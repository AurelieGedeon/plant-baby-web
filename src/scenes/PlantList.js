import { useState, useEffect } from "react";
import PlantCard from "../components/PlantCard";

export default function PlantList() {
  const [plantList, setPlantList] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((res) => res.json())
      .then((data) => setPlantList(data))
      .catch(alert);
  }, []);
  return (
    <>
      <h1>Plant List</h1>
      {!plantList ? (
        <h2>Loading...</h2>
      ) : (
        plantList.map((plant) => {
          console.log(plant);
          return (
            <>
              <PlantCard
                name={plant.plantName}
                image={plant.image}
                id={plant.id}
                water={plant.water}
                humidity={plant.humidity}
                temperature
              />
            </>
          );
        })
      )}
    </>
  );
}
