import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
} from "@chakra-ui/react";

export default function UserMenu({
  logout,
  photo,
  name,
  myPlans,
  isAdmin,
  sendToFavorites,
  sendToPanelAdmin,
}) {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar size={"sm"} src={photo} />
        </MenuButton>
        <MenuList alignItems={"center"}>
          <br />
          <Center>
            <Avatar size={"2xl"} src={photo} />
          </Center>
          <br />
          <Center>
            <p>{name}</p>
          </Center>
          <br />
          <MenuDivider />
          {/* <MenuItem onClick={myPlans}>My Plans</MenuItem> */}
          {/*<MenuItem>Account Settings</MenuItem> */}
          {isAdmin ? (
            <MenuItem onClick={sendToPanelAdmin}>Panel admin</MenuItem>
          ) : (
            <></>
          )}
          <MenuItem onClick={sendToFavorites}>My favorites</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
