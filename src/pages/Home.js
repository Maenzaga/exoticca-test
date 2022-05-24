import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getCard from "../services/cardService";

export default function Home() {
  const [cards, setCards] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getCard().then((result) => {
      console.log(result);
      setCards(result);
      setLoaded(true);
    });
  }, [setCards]);

  return (
    <div className={"home"}>
      {!loaded ? (
        <>loading...</>
      ) : (
        <div>
          <h1>Exercise1</h1>
          <div>
            {cards.slides.map((card) => {
              return <h1>{card.name}</h1>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
