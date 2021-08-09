import React, { useState } from "react";
import CardsCarousel from "./CardsCarousel";
import { BsSearch } from "react-icons/bs";

const Hero = () => {
  const [search, setSearch] = useState("");
  const searchFunc = () => {
    window.location.href = `https://www.google.com/search?q=${search}`;
  };
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Find Out What's New</h1>
        <p>
          Search the world's information, including webpages, images, videos and
          more , and because I'm only a FRONT-END WEB DEVELOPER this search
          inputs directly into{" "}
          <a href="https://www.google.com/" style={{ color: "#4885ed	" }}>
            Google's
          </a>{" "}
          search
        </p>
        <div className="input">
          <div className="icon">{BsSearch()}</div>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => {
              if (e.charCode === 13) {
                searchFunc();
              }
            }}
          />
          <button onClick={() => searchFunc()}>Search</button>
        </div>
        <div className="hero-nav">
          <button className="upgBtn">Upgrade</button>
          <button>Sign In</button>
        </div>
      </div>

      <CardsCarousel />
    </div>
  );
};

export default Hero;
