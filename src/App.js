import { Route, Routes } from "react-router-dom";
import PlantList from "./scenes/PlantList";
import PlantPage from "./scenes/PlantPage";
import Header from "./components/Header";
import Hero from "./scenes/Hero";
import Login from "./scenes/Login";
import Signup from "./scenes/Signup";
import Dashboard from "./scenes/Dashboard";
import { useEffect, useState, createContext } from "react";
import React from "react";
import Footer from "./components/Footer";
import PlantDoctor from "./scenes/PlantDoctor";

export const FavoriteContext = createContext();

function App() {
  const [user, setUser] = useState();
  const [plantList, setPlantList] = useState();

  useEffect(() => {
    // console.log("Here is my useEffect and user", user);
  }, []);
  return (
    <>
      <FavoriteContext.Provider value={{ plantList, setPlantList }}>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/login"
            element={<Login setUser={setUser} user={user} />}
          />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route
            path="/dashboard"
            element={
              user ? <Dashboard user={user} /> : <Login setUser={setUser} />
            }
          />
          <Route path="/plants" element={<PlantList user={user} />} />
          <Route path="/plantdoctor" element={<PlantDoctor />} />
          <Route path="/plants/:plantId" element={<PlantPage user={user} />} />
        </Routes>
        <Footer />
      </FavoriteContext.Provider>
    </>
  );
}

export default App;
