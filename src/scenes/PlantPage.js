import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlantAccordion from "../components/PlantAccordion";
import "../App.css";

export default function PlantPage() {
  const params = useParams();
  console.log(params);
  const [plantInfo, setPlantInfo] = useState([]);
  console.log(plantInfo);
  useEffect(() => {
    fetch(`http://localhost:3000/plants/${params.plantId}`)
      .then((res) => res.json())
      .then((data) => setPlantInfo(data))
      .catch(alert);
  }, []);
  return (
    <div className="plant-page" style={{ marginTop: "50px" }}>
      <div className="plant-page-img-column">
        <img
          src={plantInfo.image}
          alt={plantInfo.plantName}
          className="plant-image"
        />
        <h1>{plantInfo?.plantName}</h1>
        <p className="scientific-name">{plantInfo?.scientificName}</p>
      </div>
      <div className="plant-page-descriptions">
        <PlantAccordion
          water={plantInfo.water}
          sunlight={plantInfo.sunlight}
          humidity={plantInfo.humidity}
          temperature={plantInfo.temperature}
          fertilizer={plantInfo.fertilizer}
          medium={plantInfo.medium}
          repot={plantInfo.repot}
        />
      </div>
    </div>
  );
}
