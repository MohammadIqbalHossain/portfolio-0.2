import React from 'react';
import "./Projects.scss";
import { IoLogoGithub } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // eslint-disable-next-line no-unused-vars
  const checkTech = (index) => {
    if (index === 0) {
      return ["HTML", "CSS", "MongoDB"];
    } else if (index === 1) {
      return ["HTML", "CSS", "bootsstap"];
    } else if (index === 2) {
      return ["HTML", "CSS"];
    } else {
      return [];
    }
  };

  const usedTech = data.map((indexData) =>
    indexData.technologies.filter(
      (tech) => !["HTML", "CSS", "Bootsstrap"].includes(tech),
    ),
  );

  const flattedTech = usedTech.flat();
  const uniqueTech = [...new Set(flattedTech)];

  return (
    <div className="container">
      <h2 className="projects__title">Projects</h2>
      <p className="projects__tagline">
        Some projects I&apos;m working on...
      </p>
      <ul className="cards">
        {data.map((indexData, index) => (
          <li
            className="card"
            id={
              index === 0
                ? "card__1"
                : index === 2
                  ? "card__2"
                  : index === 3
                    ? "card__3"
                    : ""
            }
            key={indexData._id}
          >
            <div className="card-body">
              {/* <div className="card__img" id="img01"></div> */}
              <div className="card__content">
                <div className="card__theme-header">
                  <p className="card__content-theme">{indexData.tagline}</p>
                  <div className="view-btns">
                    <Link
                      to="https://github.com/MohammadIqbalHossain/rocket-rock-client-site"
                      className="github__view-btn"
                      title="Github code"
                      target='__blank'
                    >
                      <IoLogoGithub />
                    </Link>

                    <Link to="https://rocket-rock-cce05.web.app/" target='__blank' className="preview-btn" title="View live site">
                      <FaPlay />
                    </Link>
                  </div>
                </div>

                <h2 className="card__content-header">
                  {indexData.projectName}
                </h2>
                <p className="card__content-paragraph">
                  {indexData.description.slice(0, 200)}...
                  <Link
                    to={`/details/${indexData._id}`}
                    className="card__content-link"
                  >
                    Read
                  </Link>
                </p>

                <div className="card__content-skills">
                  <p className="projects__tagline">Technologies used:</p>
                  {uniqueTech.map((projectTech, index) => (
                    <button
                      key={`${projectTech}-${index}`}
                      className="card__content-button"
                    >
                      <span>
                        {projectTech}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Projects;
