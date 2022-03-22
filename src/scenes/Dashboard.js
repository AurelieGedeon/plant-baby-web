import PlantCard from "../components/PlantCard";
import { useContext, useEffect } from "react";
import { FavoriteContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ user }) {
  const { plantList, setPlantList } = useContext(FavoriteContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.uid) {
      fetch(`https://plant-baby-ag.uc.r.appspot.com/users/${user.uid}/plants`)
        .then((res) => res.json())
        .then((data) => {
          setPlantList(data);
        })
        .catch(alert);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <h1>Welcome, {user.firstName || user.displayName}!</h1>

      <div className="plant-list">
        {!plantList ? (
          <h2>Loading...</h2>
        ) : (
          plantList.map((plant) => {
            return (
              <div
                style={{
                  maxWidth: "260px",
                  margin: "2%",
                  paddingLeft: "4%",
                }}
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
    </>
  );
}
