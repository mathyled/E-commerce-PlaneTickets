// Chakra imports
import {
  Flex,
  Grid,
  Center,
  Image,
  Text,
  SimpleGrid,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
// assets
import peopleImage from "../../../assets/img/people-image.png";
import logoChakra from "../../../assets/svg/logo-white.svg";

import BarChart from "../../../components/Charts/BarChart";
import LineChart from "../../../components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "../../../components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "../../../variables/general";

import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection="column" pt={{ base: "0", md: 0 }}>
      <Center>
        <Heading p={5}>Welcome to the admin panel</Heading>
      </Center>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <SalesOverview
          title={"Sales Overview"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
    </Flex>
  );
}
