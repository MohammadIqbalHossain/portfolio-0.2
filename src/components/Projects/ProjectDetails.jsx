import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Projects/ProjectDetails.scss";
import { RxExternalLink } from "react-icons/rx";

const ProjectDetails = () => {
  const { id } = useParams();

  const [detailData, setDetailData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setDetailData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredProject = detailData.filter((project) => project._id === id);
  console.log(filteredProject);

  if (filteredProject.length === 0) {
    return <div>data not found.</div>;
  }

  const image1 = filteredProject[0].image1;
  const image2 = filteredProject[0].image2;
  const image3 = filteredProject[0].image3;

  return (
    <div className="project__details">
      <h1
        className="project__details-title"
        style={{ "--font-size": "95px", "--text-transform": "capitalize" }}
      >
        {filteredProject[0].projectName}
      </h1>
      <h2 className="project__path">Breath in space.</h2>

      <div
        className="project__banner-image"
        style={{
          "--background-image": `url(${image1})`,
        }}
      ></div>

      <div className="project__action-btns">
        <button className="project__action-btn live__action-btn" role="button">
          <a href="#">
            Live View
            <RxExternalLink />
          </a>
        </button>
        <button
          className="project__action-btn github__client-btn"
          role="button"
        >
          <a href="#">
            GitHub→ Front-End
            <RxExternalLink />
          </a>
        </button>
        <button
          className="project__action-btn github__server-btn"
          role="button"
        >
          <a href="#">
            GitHub→ Back-End
            <RxExternalLink />
          </a>
        </button>
      </div>

      <div className="paragraph">
        <p>{filteredProject[0].description}</p>
      </div>

      <div className="card-container">
        <div
          className="project__details-card"
          style={{
            "--image": `url(${image1})`,
            "--angle": "-5deg",
            "--x": "-15%",
            "--y": "21%",
            "--caption": '"berlin"',
          }}
        ></div>

        <div
          className="project__details-card"
          style={{
            "--image": `url(${image2})`,
            "--angle": "-1deg",
            "--x": "10%",
            "--y": "20%",
            "--caption": '"London"',
          }}
        ></div>

        <div
          className="project__details-card"
          style={{
            "--image": `url(${image3})`,
            "--angle": "-4deg",
            "--x": "20%",
            "--y": "5%",
            "--caption": '"berlin"',
          }}
        ></div>

        <div
          className="project__details-card"
          style={{
            "--image": 'url("https://i.ibb.co/zJXcftt/breathing-knowlage.png")',
            "--angle": "7deg",
            "--x": "10%",
            "--y": "-7%",
            "--caption": '"berlin"',
          }}
        ></div>
      </div>

      <div>
        <h2
          className="project__details-title"
          style={{ "--font-size": "15px", "--text-transform": "capitalize" }}
        >
          Technologies Used:{" "}
        </h2>
      </div>

      <div className="project__tech-stack">
        <div className="project__tech tech">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="javascript--v1"
          />
        </div>
        <div className="project__tech tech">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/plasticine/100/react.png"
            alt="react"
          />
        </div>
        <div className="project__tech tech">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/color/48/tailwind_css.png"
            alt="tailwind_css"
          />
        </div>
        <div className="project__tech tech">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/node-js.png"
            alt="node-js"
          />
        </div>
        <div className="project__tech tech">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/mongo-db.png"
            alt="mongo-db"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
