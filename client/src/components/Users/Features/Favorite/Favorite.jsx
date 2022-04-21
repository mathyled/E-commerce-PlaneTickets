import React, { useEffect, useState, useMemo } from "react";

import { Link } from "react-router-dom";
import Card from "../Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFavorite,
  getOfferDetails,
  getUserFavorites,
} from "../../../../redux/actions/actions";
import Projects from "../../Pages/AdminPanel/components/src/views/Dashboard/Tables/components/Projects";
import { Container } from "@chakra-ui/react";
import WithSubnavigation from "../NavBar.jsx";

export default function Favorites({user}) {
  const dispatch = useDispatch();
  let [currentUser, setCurrentUser] = useState({});
  // let user = useSelector((state) => state.user);
  const [favorites, setFavorites] = useState([]);
  const favCard = useSelector((state) => state.favoriteCard);

  useEffect(() => {
    const cUser = JSON.parse(localStorage.getItem("User"));
    if (cUser && Object.keys(cUser).length > 0) {
      setCurrentUser(cUser);
      dispatch(getUserFavorites(cUser._id));
    }
  }, []);

  useMemo(() => {
    setFavorites(favCard);
  }, [favCard]);

  function onClick(id) {
    // dispatch(getOfferDetails(id));
  }

  function remove(id) {
    // dispatch(removeFavorite(id));
  }

  return (
    <div>
      <WithSubnavigation user={user} />
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
            userId={currentUser?._id}
          />
        }
      </Container>
    </div>
  );
}
