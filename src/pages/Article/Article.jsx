import { useEffect, useState } from "react";
import "./Article.scss";
import { Link } from "react-router-dom";

const Article = () => {
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
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (article.length === 0) {
    return <div>data not found.</div>;
  }

  console.log(article);

  return (
    <section className="blog__section-container">
      {article.map((blog) => (
        <article key={blog.index} className="blog__container">
          <h2>{blog.index}</h2>
          <div className="blog">
            <div className="blog__header">
              <p className="blog__category">#{blog.category}</p>
              <button
                className="project__action-btn blog__read-btn"
                role="button"
              >
                <Link to={`/article/${blog.index}`}>Read more...</Link>
              </button>
            </div>
            <h3 className="blog__title">{blog.title}</h3>
            <div className="main__blog-container">
              <p>{blog.article.slice(0, 200)}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Article;
