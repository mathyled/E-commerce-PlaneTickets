import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Paged from "./Paged/Paged";
import { getCity } from "../../../redux/actions/actions"
import pictures from "./pictures.json"
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
export default function Home() {
    const dispatch = useDispatch();
    const cities = useSelector(state => state.city);

    const [currentPage, setCurrentPage] = useState(1);
    const [TicketsPerPage, setCharactersPerPage] = useState(6) // setea cuantos personajes quiero por pagina
    const indexOfLastCharacter = currentPage * TicketsPerPage // 6
    const indexOfFirstCharacter = indexOfLastCharacter - TicketsPerPage // 0
    const currentTickets = cities.slice(indexOfFirstCharacter, indexOfLastCharacter)


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        console.log(cities)
    };

    useEffect(() => {
        dispatch(getCity("MAD"))
        console.log(" CITIES", cities)
    }, [dispatch])

    return (
        <div>
            <NavBar />
            <CallToAction />
            <Paged
                TicketsPerPage={TicketsPerPage}
                total={cities.length}
                paginate={paginate}
            />

            <SimpleGrid columns={[2, null, 3]} spacing='40px'>


                {currentTickets && currentTickets.map(o => {
                    let imagen;
                    for (let i = 0; i < pictures.length; i++) {
                        if (pictures[i].hasOwnProperty(`image${o.destination}`)) {
                            imagen = pictures[i][`image${o.destination}`];
                        };
                    };
                    return (
                        <div >
                            <Card
                                origin={o.origin}
                                destination={o.destination}
                                price={o.price.total}
                                image={imagen}
                            />
                        </div>
                    )
                })}
            </SimpleGrid>
        </div>
    )
}