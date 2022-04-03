import CallToAction from "../../Features/CallToAction/CallToAction";

import Card from "../../Features/Card/Cards";

import React, { useState } from "react";
// import {useSelector,useDispatch} from "react-redux";
// import {Link} from "react-router-dom";
// import Paged from "../../Features/Paged/Paged";
import NavBar from "../../Features/NavBar/NavBar";
import Filters from "../../Features/Filters/Filters";

import { useAuth } from "../../../../context/AuthContext";

import Sidebar from "../../Features/Sidebar/Sidebar";
import Order from "../../Features/Order/Order";

import { Text, Flex } from "@chakra-ui/react";

function Home() {
  // const tickets = useSelector((state) => state.tickets);
  // const page = useSelector((state) => state.actualPage);
  // const dispatch = useDispatch()
  // const [TicketsPerPage] = useState(20);

  // const indexOfLastTicket = page * TicketsPerPage;
  // const indexOfFirstTicket = indexOfLastTicket - TicketsPerPage;
  // const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

  // function paginate( numberPage) {
  //     dispatch(changePage(numberPage));
  //   }
  const { currentUser } = useAuth();
  return (
    <div>
      <NavBar />

      <CallToAction />
      <Card />
      <Filters />

      <Flex display="flex" flexDirection="row-reverse">
        <CallToAction />
        <Sidebar>
          <Text fontSize="md" fontWeight="medium" margin="1.5">
            Filter
          </Text>
          <Filters />
          <Text fontSize="md" fontWeight="medium" margin="1.5">
            Order
          </Text>
          <Order />
        </Sidebar>
      </Flex>

      <h1>{` USER : ${currentUser}`}</h1>
      {/* <Paged

              TicketsPerPage={TicketsPerPage}
              total={tickets}
              paginate={paginate}
            /> */}

      {/* {
                    currentTickets?.map(c => {
                        return (
                            <div key={c.id}>
                                <Link to="#">
                                    <Card
                                     // attributes here !
                                    />
                                </Link>
                            </div>
                        )
                    })
                } */}
    </div>
  );
}

export default Home;
