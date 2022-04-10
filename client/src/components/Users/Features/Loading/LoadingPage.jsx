import React from "react";
import {Center, Image, Box} from "@chakra-ui/react";
import loading from "../../../../assets/loading.gif" 


function LoadingPage(){
 return <Center position="absolute" w="100vw" h="100vh"><Image boxSize="lg" position="absolute" zIndex="999" src={loading}/></Center>
}

export default LoadingPage