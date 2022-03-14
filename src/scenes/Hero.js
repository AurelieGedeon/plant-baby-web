import { Fab } from "@mui/material";
import "../scenes/Hero.css";
import React from "react";

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
    </>
  );
}
