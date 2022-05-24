import { useEffect, useState } from "react";
import Slide from "../components/Slide/Slide";
import getCard from "../services/cardService";

export default function Home() {
  const [cards, setCards] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getCard().then((result) => {
      setCards(result);
      setLoaded(true);
    });
  }, [setCards]);

  return (
    <div className={"home"}>
      {!loaded ? (
        <>loading...</>
      ) : (
        <div className="mainContainer">
          <h1>Carrousel</h1>
          <div>
            {cards.slides.map((card) => {
              console.log(card.cards);
              return <Slide props={card} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
