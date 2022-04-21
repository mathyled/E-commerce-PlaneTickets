import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useColorMode,
    useBreakpointValue,
    useDisclosure,
    Spacer,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import LoginModal from './SignIn/LoginModal';
import RegisterModal from './SignUp/RegisterModal';
import { useDispatch, useSelector } from 'react-redux';
import FilterModal from './FilterModal';
import SearchBar from './SearchBar/SearchBar';
import { NavLink, useNavigate } from 'react-router-dom';
import UserMenu from './UserMenu';
import Cart from './Cart';
import { FaMoon, FaSun } from 'react-icons/fa';
import { getBackUpState, logOut } from "../../../redux/actions/actions";
import Navlink from './UserModal/components/Navlink';



export default function WithSubnavigation({ user }) {
    const { isOpen, onToggle } = useDisclosure();
    const cart = useSelector(state => state.cart)
    const currentUser = useSelector(state => state.user)
    const { toggleColorMode } = useColorMode()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    async function handlerLogOut(e) {
        e.preventDefault();
        // handle logout
        dispatch(logOut())
        localStorage.clear("User")
    }
    return (
        <Box>
            <Flex
                bg={useColorModeValue('gray.200', 'gray.500')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>

                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}

                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav user={user} />
                    </Flex>

                </Flex>
                {/* MOBUIOLE */}
                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <FilterModal />
                    {!currentUser?.confirmationCode?.length > 0 && !user?.confirmationCode?.length > 0 && <LoginModal />}
                    {!currentUser?.confirmationCode?.length > 0 && !user?.confirmationCode?.length > 0 && <RegisterModal />}
                    {currentUser?.confirmationCode?.length > 0 && (
                        <UserMenu
                            logout={handlerLogOut}
                            myPlans={() => navigate("/my-plans")}
                            photo={currentUser?.photoURL}
                            name={currentUser.username || user?.username}

                        />
                    )}
                    <NavLink to="/cart">
                        <Cart quantity={cart.length} />
                    </NavLink>


                    <IconButton
                        variant="outline"
                        icon={useColorModeValue(<FaSun />, <FaMoon />)}
                        onClick={toggleColorMode}
                        aria-label="toggle-dark-mode"
                    />
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <SearchBar />
                <MobileNav />

            </Collapse>

        </Box>
    );
}

const DesktopNav = () => {

    const dispatch = useDispatch()

    return (
        <Stack direction={'row'} spacing={4} alignItems={"center"} >

            <Navlink
                to="/home"
                name="Heading North"
                onClick={() => dispatch(getBackUpState())}
            />
         
            <NavLink to="/about">About</NavLink>

          
            <SearchBar />

        </Stack>
    );
};



const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};


//   <Box>

//   <Navlink
//     to="/home"
//     name="Heading North"
//     onClick={() => dispatch(getBackUpState())}
//   />
// </Box>

{/* <Link  to="/about">{" "}About</Link> */ }

const NAV_ITEMS = [
    // {
    //     label: 'Inspiration',
    //     children: [
    //         {
    //             label: 'Explore Design Work',
    //             subLabel: 'Trending Design to inspire you',
    //             href: '#',
    //         },
    //         {
    //             label: 'New & Noteworthy',
    //             subLabel: 'Up-and-coming Designers',
    //             href: '#',
    //         },
    //     ],
    // },
    // {
    //     label: 'Find Work',
    //     children: [
    //         {
    //             label: 'Job Board',
    //             subLabel: 'Find your dream design job',
    //             href: '#',
    //         },
    //         {
    //             label: 'Freelance Projects',
    //             subLabel: 'An exclusive list for contract work',
    //             href: '#',
    //         },
    //     ],
    // },
    {
        label: 'Heading North',
        href: '/home',
    },
    {
        label: 'About',
        href: '/about',
    },
];