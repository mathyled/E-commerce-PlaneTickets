// Chakra imports
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "../../../assets/img/avatars/avatar4.png";
import ProfileBgImage from "../../../assets/img/ProfileBackground.png";
import React, { useEffect, useState } from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import Conversations from "./components/Conversations";
import Header from "./components/Header";

import PlatformSettings from "./components/PlatformSettings";
import ProfileInformation from "./components/ProfileInformation";
import Projects from "./components/Projects";
import axios from "axios";
function Profile() {
  // Chakra color mode
  const [user, setUser] = useState({});
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  useEffect(() => {
    const cUser = JSON.parse(localStorage.getItem("User"));
    setUser(cUser);
  }, []);
  return (
    <Flex direction="column">
      {Object.keys(user).length > 0 ? (
        <Header
          backgroundHeader={ProfileBgImage}
          backgroundProfile={bgProfile}
          //avatarImage={avatar4}

          name={user.username}
          email={user.email}
          tabs={[""]}
        />
      ) : (
        <></>
      )}
    </Flex>
  );
}

export default Profile;
