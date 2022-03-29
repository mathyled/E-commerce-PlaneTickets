import {useSelector} from "react-redux";
import Paged from "../../Features/Paged/Paged";

function Home() {
    const tickets = useSelector((state) => state.tickets);
    const page = useSelector((state) => state.actualPage);

    const [TicketsPerPage] = useState(20);

    const indexOfLastTicket = page * TicketsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - TicketsPerPage;
    const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);
   
    function paginate( numberPage) {
        dispatch(changePage(numberPage));
      }

    return (
        <div >
            <h1>Home Page</h1>
            <Paged
              TicketsPerPage={TicketsPerPage}
              total={tickets}
              paginate={paginate}
            />

                  {
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
                }
        </div>
    );
}

export default Home;