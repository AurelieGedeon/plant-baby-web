import { useState, useEffect, useContext } from "react";
import PlantCard from "../components/PlantCard";
import { FavoriteContext } from "../App";

export default function PlantList({ user }) {
  const { plantList, setPlantList } = useContext(FavoriteContext);
  // const [plantList, setPlantList] = useState();

  useEffect(() => {
    fetch("https://plant-baby-ag.uc.r.appspot.com/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlantList(data);
      })
      .catch(alert);
  }, []);
  return (
    <div>
      <h1 style={{ paddingLeft: "2%" }}>Plant List</h1>
      <div className="plant-list">
        {!plantList ? (
          <h2>Loading...</h2>
        ) : (
          plantList.map((plant) => {
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
