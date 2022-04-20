/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import Paged from "./Paged/Paged";

import {
  SimpleGrid,
  Text,
  Center,
  AlertIcon,
  Alert,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";

import NavBar from "./NavBar/NavBar";
import CallToAction from "./CallToAction/CallToAction";
import { dispatchUser, getCities, signInGoogle } from "../../../redux/actions/actions";
import LoadingPage from "./Loading/LoadingPage";
import LoadingSection from "./Loading/LoadingSection";

export default function Home({user}) {
  const dispatch = useDispatch();

  let cities = useSelector((state) => state.city);
  const search = useSelector((state) => state.search);
  const errors = useSelector((state) => state.errorMessage);
  const IsOnSearch = useSelector((state) => state.isSearching);
  // const currentUser = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);


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
  };


  // function setFavorite(Card) {
  //  dispatch(addFavorite(Card));
  //  alert("Add to Favorite Successfully!");
  //}

  console.log(IsOnSearch);
  useEffect(() => {
    if (search.length > 0) {
      setIsLoading(false);
    }
  }, [search]);
  const currentUser = useSelector(state=> state.user)
  
  useEffect(() => {
    dispatch(dispatchUser(user))
    // dispatch(signInGoogle())
  }, []);

  useEffect(() => {
    dispatch(getCities());
    // dispatch(signInGoogle())
  }, [dispatch,currentUser]);
  return (
    <div>
      {isLoading ? <LoadingPage></LoadingPage> : <></>}
      <NavBar user={user} />
      <CallToAction />
   
      <div>
        <Paged
          TicketsPerPage={TicketsPerPage}
          total={cities.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        {IsOnSearch ? <LoadingSection /> : <></>}

        {errors.map((error) => {
          return (
            <Center width={"100vw"}>
              <Alert width={80} status="warning">
                <AlertIcon />
                <AlertTitle mr={2}>{error}</AlertTitle>
              </Alert>
            </Center>
          );
        })}

        <SimpleGrid columns={[2, null, 4]} spacing="40px">
          {currentTickets &&
            currentTickets.length === 1 &&
            currentTickets[0]?.departure === undefined &&
            currentTickets[0]?.arrival === undefined ? (

            <Center width={"100vw"}>
              <Alert width={80} status="error">
                <AlertIcon />
                <AlertTitle mr={2}> Not flight avaiable!</AlertTitle>
                <CloseButton position="absolute" right="8px" top="8px" />
              </Alert>
            </Center>

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


      {/* //    <div>
   //     {subArray.length !== 0 ? ( subArray its not define
   //       subArray.map((Card) => (
   //         <div>
    //          <Link to={`//api/flights/detail/${Card.id}`}>
      //          <Card props={Card} onClick={() => onClick(Card.id)} />
        //      </Link>
          //    <buttons onClick={() => setFavorite(Card)}> AddF </buttons>
            //</div>
         // ))
       // ) : (
        //  <p>Card not found.</p>
       // )}
     // </div> */}

    </div>
  );
}
