import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { errorMsg, successMsg } from "../services/feedbackService";
import { getAllCards } from "../services/CardsService";
import NavbarB from "./NavbarB";
import { Card } from "../interfaces/Card";

interface AllCardsProps {}

const AllCards: FunctionComponent<AllCardsProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isChanged, setIsChanged] = useState<boolean>(true);

  useEffect(() => {
    getAllCards()
      .then((result) => setCards(result.data))
      .catch((err) => console.log(err));
  }, [isChanged]);

  return (
    <>
      <NavbarB />
      <h3 className="display-5 text-center">All Cards</h3>

      <div className="row">
        {cards.length ? (
          cards.map((card: Card) => (
            <div
              className="card col-md-3 m-3"
              key={card._id}
              style={{ width: "18rem" }}
            >
              <img src={card.image} className="card-img-top" alt="card img" />
              <div className="card-body">
                <h3 className="text-secondary">{card.name}</h3><hr />
                <h5 className="card-title">{card.address}</h5>
                <p className="card-text">{card.description}</p><hr />
                <p className="text-secondary">{card.phone} </p>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center my-4">No Cards </h4>
        )}
        
      </div>
    </>
  );
};

export default AllCards;
