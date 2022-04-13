/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import Paged from "./Paged/Paged";
import { SimpleGrid } from "@chakra-ui/react";
import NavBar from "./NavBar/NavBar";
import CallToAction from "./CallToAction/CallToAction";
import { getCities, addFavorite } from "../../../redux/actions/actions";
export default function Home() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.city);

  const [currentPage, setCurrentPage] = useState(1);
  const [TicketsPerPage, setCharactersPerPage] = useState(24); // setea cuantos vuelos quiero por pagina
  const indexOfLastCharacter = currentPage * TicketsPerPage; // 6
  const indexOfFirstCharacter = indexOfLastCharacter - TicketsPerPage; // 0
  const currentTickets = cities.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );
  const [buttons, setButtons] = React.useState([]);
  const [subArray, setSubArray] = React.useState([]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(cities);
  };

  function setFavorite(Card) {
    dispatch(addFavorite(Card));
    alert("Add to Favorite Successfully!");
  }

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <CallToAction />
      {/* {cities.hasOwnProperty(cities.departure) ? */}
      <div>
        <Paged
          TicketsPerPage={TicketsPerPage}
          total={cities.length}
          paginate={paginate}
        />
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          {currentTickets &&
          currentTickets.length === 1 &&
          currentTickets[0]?.departure === undefined &&
          currentTickets[0]?.arrival === undefined ? (
            <p>Not flight avaiable</p>
          ) : (
            currentTickets.map((o) => {
              {
                return o?.departure?.nameCity !== undefined &&
                  o?.arrival?.nameCity !== undefined ? (
                  <div key={o?._id}>
                    <Card
                      id={o?._id}
                      origin={o?.departure?.nameCity}
                      destination={o?.arrival?.nameCity}
                      price={o?.price}
                      image={o?.arrival?.image}
                      departureTime={o?.departure?.scheduledTime}
                      airline={o?.airline?.name}
                    />
                  </div>
                ) : (
                  <>Data Error</>
                );
              }
            })
          )}
        </SimpleGrid>
      </div>

      <div>
        {subArray.length !== 0 ? (
          subArray.map((Card) => (
            <div>
              <Link to={`//api/flights/detail/${Card.id}`}>
                <Card props={Card} onClick={() => onClick(Card.id)} />
              </Link>
              <buttons onClick={() => setFavorite(Card)}> AddF </buttons>
            </div>
          ))
        ) : (
          <p>Card not found.</p>
        )}
      </div>
    </div>
  );
}
