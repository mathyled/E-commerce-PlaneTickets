import CallToAction from "../../Features/CallToAction/CallToAction";
import React, { useState } from "react";
// import {useSelector,useDispatch} from "react-redux";
// import {Link} from "react-router-dom";
// import Paged from "../../Features/Paged/Paged";
import NavBar from "../../Features/NavBar/NavBar";
import Filters from "../../Features/Filters/Filters";
import Card from "../../Features/Card/Card";

import { useAuth } from "../../../../context/AuthContext";

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
  return;
  <div>
    <NavBar />
    <CallToAction />
    <Card />
    <Filters />

    {/* <Paged
=======
      
        <NavBar /> 
           <CallToAction/>      
        <Filters />
          <h1>{` USER : ${currentUser}`}</h1>
            {/* <Paged
>>>>>>> 446f84f8c2706a9b0ff4eae217e66ae05a839176

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
  </div>;
}

export default Home;
