import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


const DetailArticle = () => {
  const {id} = useParams();

  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     fetch('/article.json')
      .then(res => res.json())
      .then(data => {
          setArticle(data);
          setIsLoading(false);
      })
      .catch(err => {
          console.log('Error loading article data', err);
      })
  }, [id]);

  if(isLoading){
      return <div>Loading...</div>
  }

  const sortedArticle = article.filter(article => article.index === id);

  if(sortedArticle.length === 0) {
      return <div>data not found.</div>
  }


  return (
     <div>
        {
            sortedArticle.map((data) => <div key={data.index}>
                <h3>{data.title}</h3>
                <p>{data.article}</p>
            </div>)
        }
     </div>
  )
}

export default DetailArticle