import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './DetailArticle.scss';
import { LuLink } from "react-icons/lu";
import { Link } from "react-router-dom";


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
     <div className="article__detail-wrapper">
        {
            sortedArticle.map((data) => <div key={data.index}>
                {/* <h3 className="article__header"><LuLink /> {data.title}</h3>
                <p>{data.article}</p> */}

                <div className='article__header'>
                    <h1>The Title</h1>
                    <h2 className="article__author">
                        <Link>
                          by Iqbal
                        </Link>
                    </h2>
                </div>

                <div className='article__content'>
                   <div className='date'>
                     <span>April</span>
                     <span>6</span>
                   </div>

                   <div className='article'>
                      <h2>
                        Prolouge
                      </h2>
                      <h3>
                         Posted by <Link>Iqbal</Link>
                      </h3>
                      <p> 
                        <span className='first-charecter'>{data.article.slice(0, 1)}</span>
                        {data.article.slice(1, 300)}
                      </p>
                      <br></br>
                      <p>
                      {data.article.slice(300, 700)}
                      </p>
                   </div>
                </div>   
            </div>)
        }
     </div>
  )
}

export default DetailArticle