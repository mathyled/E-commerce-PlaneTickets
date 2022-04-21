import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Heading,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItineraries } from "../../../../redux/actions/actions";
import DeletePlanModal from "../../Features/MyPlans/DeletePlanModal";
import EditPlanModal from "../../Features/MyPlans/EditPlanModal";
import WithSubnavigation from "../../Features/NavBar";


function MyPlans() {
  const dispatch = useDispatch();
  const myPlans = useSelector((state) => state.itineraries);
  useEffect(() => {
    dispatch(getItineraries());
  }, [dispatch]);
  return (
    <>
      <WithSubnavigation  />
      <Heading>My plans</Heading>
      {myPlans.length > 0 ? (
        <TableContainer mx={8} my={8}>
          <Table>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Origin</Th>
                <Th>Destination</Th>
                <Th>Comments</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {myPlans?.map((el, index) => (
                <Tr key={el.id}>
                  <Td>{index}</Td>
                  <Td>{el.origin}</Td>
                  <Td>{el.destination}</Td>
                  <Td>{el.comment}</Td>
                  <Td>
                    <HStack>
                      <EditPlanModal id={el.id} />
                      <DeletePlanModal id={el.id} />
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Heading>There's no plans for this user!</Heading>
      )}
    </>
  );
}

export default MyPlans;
