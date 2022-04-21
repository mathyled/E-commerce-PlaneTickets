import { Icon, IconButton, LightMode } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../../redux/actions/actions";

export const FavouriteButton = ({
  id,
  destination,
  price,
  image,
  origin,
  departureTime,
  airline,
}) => {
  const cUser = JSON.parse(localStorage.getItem("User"));
  if (cUser && Object.keys(cUser).length > 0) {
  }
  const dispatch = useDispatch();
  function createFavorite() {
    return {
      userId: cUser._id,
      product: {
        id: id,
        origin: origin,
        price: price,
        image: image,
        departureTime: departureTime,
        airline: airline,
        destination: destination,
      },
    };
  }
  if (cUser && Object.keys(cUser).length > 0) {
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
  } else {
    return <></>;
  }
};
