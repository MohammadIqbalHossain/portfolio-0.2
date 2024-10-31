import { useEffect, useState, React } from "react";
import { useParams } from "react-router-dom";
import "./DetailArticle.scss";
import { Link } from "react-router-dom";

const DetailArticle = () => {
  const { id } = useParams();

  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/article.json")
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error loading article data", err);
      });
  }, [id]);

  if (isLoading) {
   
    return <div>Loading...</div>;
  }

  const sortedArticle = article.filter((article) => article.index === id);

  if (sortedArticle.length === 0) {
    return <div>data not found.</div>;
  }

  const slices = [
    { start: 0, end: 1, className: "first-character" }, // first character
    { start: 1, end: 300 },
    { start: 300, end: 700 },
    { start: 700, end: 1000 },
    { start: 1000, end: 1700 },
    { start: 1700, end: 2300 },
    { start: 2300, end: 2700 },
    { start: 2700, end: 3000 },
    { start: 3000, end: 3500 },
    { start: 3500, end: 4000 },
  ];

  return (
    <div className="article__detail-wrapper">
      {sortedArticle.map((data) => (
        <div key={data.index}>
          <div className="article__header">
            <h1>The Article</h1>
            <h2 className="article__author">
              <Link>by Iqbal</Link>
            </h2>
          </div>

          <div className="article__content">
            <div className="date">
              <span>April</span>
              <span className="day">{data.index}</span>
            </div>

            <div className="article">
              <h2>{data.title}</h2>
              <h3>
                Posted by <Link>Iqbal</Link>
              </h3>

              {slices.map((slice, index) => (
                <p key={index}>
                  {slice.className ? (
                    <span className={slice.className}>
                      {data.article.slice(slice.start, slice.end)}
                    </span>
                  ) : (
                    data.article.slice(slice.start, slice.end)
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailArticle;
