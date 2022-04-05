import { chakra, IconButton } from "@chakra-ui/react";
import {  AiOutlineShoppingCart } from "react-icons/ai";
function Cart() {
    return (

        <IconButton
            isRound
            size="md"
            icon={
                <>
                    <AiOutlineShoppingCart />
                    <chakra.span
                        pos="absolute"
                        top="-1px"
                        right="-1px"
                        px={2}
                        py={1}
                        fontSize="xs"
                        fontWeight="bold"
                        lineHeight="none"
                        color="red.100"
                        transform="translate(50%,-50%)"
                        bg="red.600"
                        rounded="full"
                    >
                        99
                    </chakra.span>
                </>
            }
        />
    );
}

export default Cart;