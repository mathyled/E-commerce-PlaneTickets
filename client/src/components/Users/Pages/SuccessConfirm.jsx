import React,{useEffect} from "react";

import {
    Box,
    Text,
    Image,
    useColorModeValue,
    Center,
} from "@chakra-ui/react";
import success from "../../../assets/success.png";
import { NavLink, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {getConfirm} from "../../../redux/actions/actions";
const Confirm = () => {
    const { token } = useParams()
    const dispatch = useDispatch()
    const confirm = useSelector(state => state.confirm)

    console.log(confirm)
    useEffect(()=>{
        dispatch(getConfirm(token))
    },[dispatch,token])

 
    return (
        <Center py={6}>

            <Box
                maxW= {'50%'}
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
                    letterSpacing={1.1} >Thanks, you can </Text>

                    <NavLink to="/home" >sign in </NavLink>

            </Box>
        </Center>

    )
};

export default Confirm;