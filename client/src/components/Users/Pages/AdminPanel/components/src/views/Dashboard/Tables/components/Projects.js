// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/Card/Card.js";

import CardBody from "../../../../components/Card/CardBody.js";
import CardHeader from "../../../../components/Card/CardHeader.js";
import TablesProjectRow from "../../../../components/Tables/TablesProjectRow";
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Router, Route, Link } from "react-router-dom";

const Projects = ({
  title,
  captions,
  data,
  details,
  favorites,
  userId,
  forceUpdate,
}) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p="6px 0px 22px 0px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px">
              {captions.map((caption, idx) => {
                return (
                  <Th color="gray.400" key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {favorites
              ? data.map((row) => {
                  return (
                    <TablesProjectRow
                      key={row.id}
                      userId={userId}
                      isFavorites={true}
                      origin={row.origin}
                      arrival={row.destination}
                      departureTime={row.departureTime}
                      image={row.image}
                      id={row.id}
                      budget={row.price}
                    />
                  );
                })
              : details
              ? data.map((row) => {
                  return (
                    <TablesProjectRow
                      key={row._id}
                      name={row.departure.nameCity}
                      id={row._id}
                      budget={row.price}
                    />
                  );
                })
              : data.map((row) => {
                  return (
                    <TablesProjectRow
                      style={{ position: "relative" }}
                      key={row.name}
                      isOrder={true}
                      name={row.username}
                      budget={row.amount}
                      id={row._id}
                      status={row.status}
                    />
                  );
                })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Projects;
