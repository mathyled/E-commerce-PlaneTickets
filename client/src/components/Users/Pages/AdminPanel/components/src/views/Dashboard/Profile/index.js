// Chakra imports
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "../../../assets/img/avatars/avatar4.png";
import ProfileBgImage from "../../../assets/img/ProfileBackground.png";
import React from "react";
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

  let baseUrl = "http://localhost:3001/";
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  async function getMyUser() {
    let json = await axios.request({
      method: "get",
      url: `${baseUrl}api/users/find/${""}`,

      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWRkNWUyZjM0ODU2OGM5NjRiZWE0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDMyMTg5MSwiZXhwIjoxNjUwNTgxMDkxfQ.XTPcIAjStJu54iq9Pur9_DfuSnlLHa7K8a1v3V620r4",
      },
    });
  }
  return (
    <Flex direction="column">
      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        //avatarImage={avatar4}

        name={"Esthera Jackson"}
        email={"esthera@simmmple.com"}
        tabs={[""]}
      />
    </Flex>
  );
}

export default Profile;
