
import {
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Center,
} from '@chakra-ui/react';

export default function UserMenu({logout,photo,name}) {
    return (
        <>
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                        size={'sm'}
                        src={photo}
                    />
                </MenuButton>
                <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                        <Avatar
                            size={'2xl'}
                            src={photo}
                        />
                    </Center>
                    <br />
                    <Center>
                        <p>{name}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    {/* <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem> */}
                    <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
}
