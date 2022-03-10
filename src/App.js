import { Route, Routes } from "react-router-dom";
import PlantList from "./scenes/PlantList";
import PlantPage from "./scenes/PlantPage";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/plants" element={<PlantList />} />
        <Route path="/plants/:plantId" element={<PlantPage />} />
      </Routes>
    </>
  );
}

export default App;
