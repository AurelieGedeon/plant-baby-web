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

export const PlantContext = createContext();

function App() {
  const [user, setUser] = useState();
  const [plant, setPlant] = useState();

  useEffect(() => {
    console.log("Here is my useEffect and user", user);
  }, []);
  return (
    <>
      <PlantContext.Provider value={(plant, setPlant)}>
        <Header />
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
          <Route path="/plants" element={<PlantList />} />
          <Route path="/plants/:plantId" element={<PlantPage />} />
        </Routes>
        <Footer />
      </PlantContext.Provider>
    </>
  );
}

export default App;
