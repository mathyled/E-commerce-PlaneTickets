import { Icon, IconButton, LightMode } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../../redux/actions/actions";

export const FavouriteButton = ({ id }) => {
  const dispatch = useDispatch();
  function createFavorite() {
    return {
      userId: "625dd5e2f348568c964bea57",
      product_id: id,
    };
  }
  return (
    <LightMode>
      <IconButton
        onClick={() => {
          dispatch(addFavorite(createFavorite()));
        }}
        isRound
        bg="white"
        color="gray.900"
        size="sm"
        _hover={{
          transform: "scale(1.1)",
        }}
        _active={{
          bg: "#FA175E",
        }}
        sx={{
          ":hover > svg": {
            transform: "scale(1.1)",
          },
        }}
        transition="all 0.15s ease"
        icon={<Icon as={FiHeart} transition="all 0.15s ease" />}
        boxShadow="base"
      />
    </LightMode>
  );
};
