import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Paged from "./Paged/Paged";
// import { getOffers } from "../../../redux/actions/actions";
import pictures from "./pictures.json";
import {
  chakra,
  Box,
  Image,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "./NavBar/NavBar";
import CallToAction from "./CallToAction/CallToAction";
import { getCities } from "../../../redux/actions/actions";
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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(cities);
  };

  // useEffect(() => {
  //   // dispatch(getOffers("MAD", "HAV", "2022-04-04", "1"));
  //  console.log(" CITIES", cities);
  // }, [dispatch]); 

  useEffect(() => {
    dispatch(getCities())
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <CallToAction />
      <Paged
        TicketsPerPage={TicketsPerPage}
        total={cities.length}
        paginate={paginate}
      />

      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {currentTickets &&
          currentTickets.map((o) => {
            // let imagen;
            // for (let i = 0; i < pictures.length; i++) {
            //   if (
            //     pictures[i].hasOwnProperty(
            //       `image${o.itineraries[0].segments[0].arrival.iataCode}`
            //     )
            //   ) {
            //     imagen =
            //       pictures[i][
            //         `image${o.itineraries[0].segments[0].arrival.iataCode}`
            //       ];
            //   }
            // }
            return (
              <div >
                <Card
                // id={o.id}

                // origin={o.nameCity}
                // destination={o.itineraries[0].segments[0] ? o.itineraries[0].segments[1].arrival.iataCode : o.itineraries[0].segments[0].arrival.iataCode}
                // price={o.price.total}
                // image={imagen}
                />
              </div>
            );
          })}
      </SimpleGrid>
    </div>
  );
}
