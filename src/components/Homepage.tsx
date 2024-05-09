import { useEffect, useState } from "react";
import IMainFetchInfo from "../interfaces/IMainFetchInfo";

const Homepage = () => {
  const [articles, setArticles] = useState<IMainFetchInfo[]>([]);

  const fetchArticles = async () => {
    try {
      const resp = await fetch(import.meta.env.GENERAL_FETCH_ENDPOINT);
      if (resp.ok) {
        const arrayOfArticles = await resp.json();
        setArticles(arrayOfArticles);
      } else {
        throw new Error(`Could not fetch articles`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArticles;
  }, []);
  return (
    <>
      {
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      }
    </>
  );
};

export default Homepage;
