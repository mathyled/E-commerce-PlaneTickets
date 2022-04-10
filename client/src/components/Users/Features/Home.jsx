import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Paged from "./Paged/Paged";
import { SimpleGrid} from "@chakra-ui/react";
import NavBar from "./NavBar/NavBar";
import CallToAction from "./CallToAction/CallToAction";
import { getCities } from "../../../redux/actions/actions";
import LoadingPage from "./Loading/LoadingPage";

export default function Home() {
  const dispatch = useDispatch();
  let cities = [];
  cities = useSelector((state) => state.city);
  const search= useSelector((state)=> state.search);

  const [isLoading, setIsLoading]= useState(true)
  
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
  console.log(cities)
  useEffect(() => {
    console.log("CARGANDO")
    if (search.length>0){setIsLoading(false)} ;
  }, [search]);
 

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);
  return (
    
    <div> 
      {isLoading? <LoadingPage></LoadingPage>:<></>}
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
</div>
  );
}
