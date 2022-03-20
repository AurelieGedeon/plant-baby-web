import { useState, useEffect } from "react";
import PlantCard from "../components/PlantCard";

export default function PlantList({ user }) {
  const [plantList, setPlantList] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlantList(data);
      })
      .catch(alert);
  }, []);
  return (
    <div style={{ marginTop: "8%" }}>
      <h1 style={{ paddingLeft: "2%" }}>Plant List</h1>
      <div className="plant-list">
        {!plantList ? (
          <h2>Loading...</h2>
        ) : (
          plantList.map((plant) => {
            console.log(plant);
            return (
              <div
                style={{ maxWidth: "260px", margin: "2%", paddingLeft: "4%" }}
              >
                <PlantCard
                  setPlantList={setPlantList}
                  isFavorite={plant.isFavorite}
                  name={plant.plantName}
                  image={plant.image}
                  id={plant.id}
                  water={plant.water}
                  humidity={plant.humidity}
                  user={user}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
