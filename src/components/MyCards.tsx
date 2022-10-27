import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { errorMsg, successMsg } from "../services/feedbackService";
import { deleteCard, getUserCards } from "../services/CardsService";
import NavbarB from "./NavbarB";
import { Card } from "../interfaces/Card";

interface AllCardsProps {}

const AllCards: FunctionComponent<AllCardsProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    getUserCards()
      .then((result) => setCards(result.data))
      .catch((err) => console.log(err));
  }, [isChanged]);

  const handleDelete = (card: Card) => {
    if (window.confirm(`Are you sure you want to delete ${card.name}?`))
      // needs casting since it's not required
      deleteCard(card._id as string)
        .then(() => {
          setIsChanged(!isChanged);
          successMsg("Card deleted successfully");
        })
        .catch((err) => errorMsg(err));
  };

  return (
    <>
      <NavbarB />
      <h3 className="display-5 text-center">All Cards</h3>

      <div className="row">
        {cards.length ? (
          cards.map((card: Card) => (
            <div
              className="card col-md-3 m-3 text-center"
              key={card._id}
              style={{ width: "18rem" }}
            >
              <img src={card.image} className="card-img-top" alt="card img" />
              <div className="card-body">
                <h3 className="text-dark">{card.name} </h3>
                <hr />
                <h5 className="card-title">{card.address}</h5>
                <hr />
                <p className="card-text">{card.description}</p>
                <hr />
                <p className="text-secondary">{card.phone} </p>
                <hr />
                <Link to={`/edit-card/${card._id}`} className="btn btn-warning mx-1">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button
                  onClick={() => handleDelete(card)}
                  className="btn btn-danger mx-1"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center my-4">No cards </h4>
        )}
      </div>
    </>
  );
};

export default AllCards;
