import React, { useEffect, useState, useMemo } from "react";

import { Link } from "react-router-dom";
import Card from "../Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFavorite,
  getOfferDetails,
  getUserFavorites,
} from "../../../../redux/actions/actions";
import NavBar from "../NavBar/NavBar.jsx";
import Projects from "../../Pages/AdminPanel/components/src/views/Dashboard/Tables/components/Projects";
import { Container } from "@chakra-ui/react";

export default function Favorites() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  const [favorites, setFavorites] = useState([]);
  const favCard = useSelector((state) => state.favoriteCard);

  useEffect(() => {
    const cUser = JSON.parse(localStorage.getItem("User"));
    if (cUser && Object.keys(cUser).length > 0) {
      console.log("SISI A", cUser._id);
      dispatch(getUserFavorites(cUser._id));
    }
    console.log("xdddddddddddddddddd");
  }, []);

  useMemo(() => {
    setFavorites(favCard);
  }, [favCard]);

  console.log("22222222222222222222222");
  console.log(favorites);

  function onClick(id) {
    // dispatch(getOfferDetails(id));
  }

  function remove(id) {
    // dispatch(removeFavorite(id));
  }

  return (
    <div>
      <NavBar />
      <Container minW="90%" centerContent>
        {
          <Projects
            captions={[
              "Origin",
              "Arrival",
              "Departure time",
              "Price",
              "Remove",
            ]}
            data={favorites?.products?.length > 0 ? favorites["products"] : []}
            favorites={true}
          />
        }
      </Container>
    </div>
  );
}
