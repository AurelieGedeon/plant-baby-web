import { Fab } from "@mui/material";
import "../components/Hero.css";
import React from "react";

export default function Hero() {
  return (
    <>
      <div class="container">
        <div class="hero-image">
          {/* <div class="hero-button"> */}
          <Fab
            variant="extended"
            style={{ position: "absolute", top: "250px", left: "250px" }}
          >
            Get Started
          </Fab>
        </div>
      </div>
    </>
  );
}
