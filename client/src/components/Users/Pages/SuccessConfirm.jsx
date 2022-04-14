import React from "react";

import {
    Box,
    Text,
    Image,
    useColorModeValue,
    Center,
} from "@chakra-ui/react";
import success from "../../../assets/success.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Confirm = () => {
    const { token } = useParams()

    console.log(token)

    return (
        <Center py={6}>

            <Box
                maxW={'50%'}
                w={'full'}
                height={"auto"}
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
                    Successful verification
                </Text>

                <Image src={success} alt="succesIcon" />
                <Text
                    fontWeight={200}
                    fontSize={'2xl'}
                    letterSpacing={1.1}
                    >Thanks, you can
                    <Link to="/home"><Text
                        color={'green.500'}>sign in</Text> </Link></Text>

            </Box>
        </Center>

    )
};

export default Confirm;