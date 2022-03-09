import { useState, useEffect } from "react";

export default function PlantPage() {
  const [plantInfo, setPlantInfo] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/plants/:plantId")
      .then((res) => res.json())
      .then((data) => setPlantInfo(data))
      .catch(alert);
  }, []);
  return plantInfo;
}
