import { Route, Routes } from "react-router-dom";
import PlantList from "./scenes/PlantList";
import PlantPage from "./scenes/PlantPage";

function App() {
  return (
    <>
      <h1>Sup</h1>
      {/* <PlantList /> */}
      <Routes>
        <Route path="/" element={<PlantList />} />
        <Route path="/plants/:plantId" element={<PlantPage />} />
      </Routes>
    </>
  );
}

export default App;
