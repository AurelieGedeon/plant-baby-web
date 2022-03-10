import { Route, Routes } from "react-router-dom";
import PlantList from "./scenes/PlantList";
import PlantPage from "./scenes/PlantPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PlantList />} />
        <Route path="/plants/:plantId" element={<PlantPage />} />
      </Routes>
    </>
  );
}

export default App;
