import React, { useState } from "react";
import { background } from "../../assets/images";

function Project() {
  const [projects] = useState([
    {
      title: "Jokr",
      tech: "Handlebars.js, Sequelize, Heroku",
      description: "Sign up to search for jokes and save them for later.",
      link: "https://damp-bastion-89209.herokuapp.com/login",
      github: "https://github.com/dolcebasstrombone/jokr",
      background: "bear.jpg",
    },
    {
      title: "Game Search",
      tech: "Tailwind, Javascript, Giant Bomb API",
      description: "Search for video games by category to find reviews.",
      link: "https://dolcebasstrombone.github.io/game-search/",
      github: "https://github.com/dolcebasstrombone/game-search",
      background: "bear.jpg",
    },
    {
      title: "Weather Dashboard",
      tech: "HTML, CSS, OpenWeather API",
      description: "Check the weather by city.",
      link: "https://dolcebasstrombone.github.io/weather-dashboard/",
      github: "https://github.com/dolcebasstrombone/weather-dashboard",
      background: "bear.jpg",
    },
    {
      title: "Coding Quiz",
      tech: "HTML, CSS, JavaScript",
      description: "Test your coding knowledge in this timed quiz!",
      link: "https://dolcebasstrombone.github.io/coding-quiz/",
      github: "https://github.com/dolcebasstrombone/coding-quiz",
      background: "bear.jpg",
    },
    {
      title: "E-Commerce Backend",
      tech: "Node.js, MySql, Sequelize",
      description: "The back-end API for an e-commerce site.",
      link: "https://github.com/dolcebasstrombone/e-commerce-backend",
      github: "https://github.com/dolcebasstrombone/e-commerce-backend",
      background: "bear.jpg",
    },
    {
      title: "Social Network API",
      tech: "Node.js, MongoDB",
      description: "The back-end API for a social network app.",
      link: "https://github.com/dolcebasstrombone/social-network-api",
      github: "https://github.com/dolcebasstrombone/social-network-api",
      background: "bear.jpg",
    },
  ]);
  return (
    <div>
      {projects.map((project) => (
        <a href={project.link} target="blank">
          <div
            className="project-card"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div>
              <h3>{project.title}</h3>
              <h4>{project.tech}</h4>
              <p>{project.description}</p>
            </div>
            <a className="github-link" href={project.github} target="blank">
              <p>GitHub Repo</p>
            </a>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Project;
