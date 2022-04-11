
import {
    Box,
    Center,
    Text,
    Stack,
    useColorModeValue,

} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function SuccessBuy() {
    return (
        <Center py={6}>
            <Box
                maxW={'545px'}
                w={'full'}
                height={"300px"}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={15}
                margin={150}
                overflow={'hidden'}>
                <Text
                    color={'green.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'3xl'}
                    letterSpacing={1.1}>
                    successful purchase

                </Text>

                <Stack
                    direction={'column'}
                    fontSize={'xx'}
                    margin={90}
                >

                    <Link to="/home" >Continue searching</Link>
                </Stack>
            </Box>
        </Center>
    );
}