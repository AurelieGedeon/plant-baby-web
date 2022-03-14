import { Fab } from "@mui/material";
import "../scenes/Hero.css";
import React from "react";
import Afro from "../assets/afro-watering-plants.jpeg";
import Ponytail from "../assets/low-ponytail-watering-plants.jpeg";
import Man from "../assets/man-watering-plants.jpeg";

export default function Hero() {
  return (
    <>
      <div class="container">
        <div class="hero-image">
          {/* <div class="hero-button"> */}
          <Fab className="hero-button" variant="extended">
            Get Started
          </Fab>
        </div>
      </div>
      <div style={{ marginTop: "7%" }}>
        <h1>Welcome to Plant Baby!</h1>
        <div className="hero-info">
          <div>
            <h2>About Us</h2>
            <p>
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
            style={{ maxWidth: "35%" }}
          />
          <div>
            <h2>Learn what works best for your plant!</h2>
            <p>
              We have researched the necessary requirements needed to help your
              plant happy including conditions such as: watering, lighting, and
              humidity requirements.
            </p>
          </div>
        </div>
        <div className="hero-info">
          <div>
            <h2>Create your plant family!</h2>
            <p>
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
      </div>
    </>
  );
}
