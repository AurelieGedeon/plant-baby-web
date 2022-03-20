import { Fab, Button, Link } from "@mui/material";
import "../scenes/Hero.css";
import React from "react";
import Afro from "../assets/afro-watering-plants.jpeg";
import Ponytail from "../assets/low-ponytail-watering-plants.jpeg";
import Man from "../assets/man-watering-plants.jpeg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const navigatePlantList = () => {
    navigate("/plants");
  };
  const navigateSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div class="container">
        <div class="hero-image">
          <Fab
            href="#AboutUs"
            className="hero-button"
            variant="extended"
            style={{
              fontWeight: "700",
              backgroundColor: "#c9df98",
              scrollBehavior: "smooth",
            }}
          >
            Get Started
          </Fab>
        </div>
      </div>
      <div class="hero-text" style={{ marginTop: "10%" }}>
        <h1 style={{ paddingLeft: "3%" }}>Welcome to Plant Baby!</h1>
        <div className="hero-info">
          <div style={{ paddingLeft: "5%" }}>
            <h2 id="AboutUs" style={{}}>
              About Us
            </h2>
            <p style={{ maxWidth: "60%" }}>
              Buying, growing, and collecting plants has become a more popular
              trend in the recent years. Some people even consider themselves
              plant parents, which is where we come in! We decided on this
              webiste to help people understand what their plants need in order
              to give their plant babies the best care possible.
            </p>
          </div>
          <img
            src={Ponytail}
            alt="woman with a low ponytail watering plants"
            style={{ maxWidth: "35%" }}
          />
        </div>
        <div className="hero-info">
          <img
            src={Man}
            alt="short-haired man watering a plant"
            style={{ maxWidth: "35%", paddingRight: "17%" }}
          />
          <div style={{ paddingLeft: "5%" }}>
            <h2>Learn what works best for your plant!</h2>
            <p style={{ maxWidth: "70%" }}>
              We have researched the necessary requirements needed to help your
              plant stay happy including conditions like watering, lighting,
              humidity, and many more!
            </p>
          </div>
        </div>
        <div className="hero-info">
          <div style={{ paddingLeft: "5%" }}>
            <h2>Create your plant family!</h2>
            <p style={{ maxWidth: "60%" }}>
              Plant Baby Members can go through our extensive roster of plants
              and pick the plants they currently have in their homes! Their
              plants will be displayed on their dashboard along with some other
              tips and tricks to keep your plants healthy and thriving!
            </p>
          </div>
          <img
            src={Afro}
            alt="man with an afro watering plants"
            style={{ maxWidth: "35%" }}
          />
        </div>
        <div className="bottom-buttons">
          <Button
            onClick={navigateSignup}
            variant="extended"
            size="large"
            style={{
              fontWeight: "700",
              backgroundColor: "#c9df98",
              borderRadius: "30px",
              marginRight: "10%",
            }}
          >
            Create an Account!
          </Button>
          <Button
            className="bottom-buttons"
            onClick={navigatePlantList}
            size="large"
            variant="extended"
            style={{
              fontWeight: "700",
              backgroundColor: "#c9df98",
              borderRadius: "30px",
            }}
          >
            Check out our plants!
          </Button>
        </div>
      </div>
    </>
  );
}
