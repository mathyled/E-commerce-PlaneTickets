import {
  Avatar,
  Badge,
  Button,
  Flex,
  Select,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Navigate } from "react-router-dom";

function TablesTableRow(props) {
  const {
    logo,
    name,
    email,
    subdomain,
    domain,
    status,
    date,
    isAdmin,
    id,
    updateUsers,
  } = props;

  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  let [admin, setAdmin] = useState(isAdmin);

  let baseUrl = "http://localhost:3001/";
  async function changeUserState(adminVal) {
    let json = await axios.request({
      method: "put",
      url: `${baseUrl}api/users/${id}`,

      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWRkNWUyZjM0ODU2OGM5NjRiZWE0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDMyMTg5MSwiZXhwIjoxNjUwNTgxMDkxfQ.XTPcIAjStJu54iq9Pur9_DfuSnlLHa7K8a1v3V620r4",
      },
      data: {
        isAdmin: adminVal,
      },
    });
  }
  async function deleteUser() {
    let json = await axios.request({
      method: "delete",
      url: `${baseUrl}api/users/${id}`,

      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWRkNWUyZjM0ODU2OGM5NjRiZWE0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDMyMTg5MSwiZXhwIjoxNjUwNTgxMDkxfQ.XTPcIAjStJu54iq9Pur9_DfuSnlLHa7K8a1v3V620r4",
      },
    });
  }

  console.log(admin);
  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        {
          //ESTO LUEGO ES UN SELECT
        }
        <Select
          onChange={(e) => {
            setAdmin(e.target.value);
            changeUserState(e.target.value);
          }}
          value={admin}
        >
          <option value={false}>User</option>

          <option value={true}>Admin</option>
        </Select>
      </Td>

      <Td>
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Save changes
          </Text>
        </Button>
      </Td>
      <Td>
        <DeleteIcon
          onClick={(e) => {
            deleteUser();
            updateUsers(id);
          }}
        />
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
