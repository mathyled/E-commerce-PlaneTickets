import React from "react";
import {
  chakra,
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  useDisclosure,
  DrawerContent,
  DrawerHeader,
  Text,
} from "@chakra-ui/react";
import Filters from "./Filters/Filters";
import Sidebar from "./Sidebar/Sidebar";
import Order from "./Order/Order";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
export default function FilterModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <MdOutlineAirplanemodeActive />
      </Button>

      <Drawer
        blockScrollOnMount={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Sidebar>
              <Text fontSize="md" fontWeight="medium" margin="1.5">
                Filter by
              </Text>
              <Filters />
              <Text fontSize="md" fontWeight="medium" margin="1.5">
                Order by
              </Text>
              <Order />
            </Sidebar>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            {/* <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
