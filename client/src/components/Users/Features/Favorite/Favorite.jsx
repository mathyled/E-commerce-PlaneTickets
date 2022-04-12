import React from "react";

import { Link } from "react-router-dom";
import Card from "../Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFavorite,
  getOfferDetails,
} from "../../../../redux/actions/actions";

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteCard);

  function onClick(id) {
    dispatch(getOfferDetails(id));
  }

  function remove(id) {
    dispatch(removeFavorite(id));
  }

  return (
    <div>
      <h3>Hola aqui estoy </h3>
      <div>
        {favorites.map((card) => (
          <div>
            <Link to={`/api/flights/detail/${card.id}`}>
              <Card props={card} onClick={() => onClick(card.id)} />
            </Link>
            <button onClick={() => remove(card.id)}>Deled</button>
          </div>
        ))}
      </div>
    </div>
  );
}
