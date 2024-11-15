import React from 'react';
import "../Header/Header.scss";
import image from "../../assets/In-profile__2_-removebg.png";
import { RoughNotation } from "react-rough-notation";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h2 className="header__title">
          Hello, I&apos;m Iqbal, a{" "}
          <RoughNotation type="highlight" show={true} color="#fff176">
            developer
          </RoughNotation>{" "}
          based in Chittagong.
        </h2>
        <br />
        <p>
          I love building tools that are{" "}
          <RoughNotation type="highlight" show={true} color="#f57f17">
            user friendly
          </RoughNotation>
          , and{" "}
          <RoughNotation
            type="highlight"
            show={true}
            animationDelay={1000}
            color="#f26cf4"
          >
            delightful.
          </RoughNotation>{" "}
        </p>
        <br />
        <p>
          I was a student at Programming Hero, where I spent a year learning the
          fundamentals of{" "}
          <RoughNotation
            type="highlight"
            show={true}
            animationDelay={1100}
            color="#d883b0"
          >
            front-end
          </RoughNotation>{" "}
          and{" "}
          <RoughNotation
            type="highlight"
            show={true}
            animationDelay={1200}
            color="#e59edf"
          >
            back-end
          </RoughNotation>{" "}
          development. I worked on team projects, focusing on building assigned
          front-end components and collaborating with teammates
        </p>
        <br />

        <p>
          Through these experiences, I had the opportunity to work with a
          specialized team, adopting a{" "}
          <RoughNotation
            type="highlight"
            show={true}
            animationDelay={1000}
            color="#fff176"
          >
            flexible
          </RoughNotation>{" "}
          <RoughNotation
            type="highlight"
            show={true}
            animationDelay={1000}
            color="#d883b0"
          >
            clear,
          </RoughNotation>{" "}
          and collaborative working style.
        </p>
        <br />

        <p>
          I am currently seeking a role as a Junior Developer.{" "}
          <RoughNotation
            type="circle"
            show={true}
            animationDelay={1000}
            color="#f26cf4"
          >
            Hire me?
          </RoughNotation>
        </p>

        <div className="header-buttons">
          <button className="header-button linkedin">
            <Link to="https://www.linkedin.com/in/iqbalhs" target="__blank">View LinkedIn</Link>
          </button>
          <button className="header-button github">
          <Link to="https://github.com/MohammadIqbalHossain" target="__blank">View GitHub</Link>
          </button>
        </div>
      </div>
      <div className="header__img_container">
        <img
          src={image}
          className="header__img"
          width="300px"
          alt="profile-photo"
        />
      </div>
    </div>
  );
};

export default Header;
