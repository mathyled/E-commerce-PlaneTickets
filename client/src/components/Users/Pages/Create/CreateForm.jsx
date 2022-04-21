import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import WithSubnavigation from "../../Features/NavBar";



import PlanForm from "../../Features/PlanForm/PlanForm";

function CreateForm() {
  // function Blur(IconProps) {
  //   return (
  //     <Icon

  //     >
  //       {/* <circle cx="71" cy="61" r="111" fill="#F56565" />
  //       <circle cx="244" cy="106" r="139" fill="#ED64A6" />
  //       <circle cy="291" r="139" fill="#ED64A6" />
  //       <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
  //       <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
  //       <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
  //       <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" /> */}
  //     </Icon>
  //   );
  // }

  return (
    <div>
     <WithSubnavigation  />
      <Box display={"relative"} zIndex={"-15"}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={2}>
            <Stack align={"center"}>
              <Heading
                lineHeight={1.1}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              >
                Create your <br />
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, teal.400,teal.300)"
                  bgClip="text"
                >
                  {" "}
                  own <br />
                </Text>
                Travel Plan
              </Heading>
            </Stack>

            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <Stack spacing={4}>
                  <Heading
                    color={"gray.800"}
                    lineHeight={1.1}
                    fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                  >
                    Let your imagination
                    <Text
                      as={"span"}
                      bgGradient="linear(to-r, teal.400,teal.300)"
                      bgClip="text"
                    >
                      {" "}
                      fly!
                    </Text>
                  </Heading>
                  <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                    Please note that this flight needs a review and approval
                    from the admin so that other users can purchase it
                  </Text>
                </Stack>
                <PlanForm type="create"/>
              </Stack>
            </Box>
          </Stack>
          {/* <Blur
          // position={"absolute"}
          top={-10}
          left={-10}
          style={{ filter: "blur(70px)" }}
        /> */}
        </Flex>
      </Box>
    </div>
  );
}

export default CreateForm;
