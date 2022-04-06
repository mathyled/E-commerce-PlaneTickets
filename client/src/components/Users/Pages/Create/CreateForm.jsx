import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  useColorModeValue,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import NavBar from "../../Features/NavBar/NavBar";
import * as Yup from "yup";
import { postFlight } from "../../../../redux/actions/actions";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

function CreateForm() {
  // const [input, setInput] = useState({
  //   origin: "",
  //   destiny: "",
  //   comments: "",
  // });
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      origin: "",
      destination: "",
      comment: "",
    },
    onSubmit: (values, actions) => {
      console.log("El plan creado...", values);
      dispatch(postFlight(values));
      actions.resetForm();
      navigate("/home");
      toast({
        title: "Flight Plan Created Successfully!",
        status: "success",
        duration: 3000,
      });
    },
    validationSchema: Yup.object({
      origin: Yup.string()
        .required("This field is required!")
        .min(4, "The origin place is too short!"),
      destination: Yup.string()
        .required("This field is required!")
        .min(4, "The destination place is too short!"),
      comment: Yup.string(),
    }),
  });

  return (
    <div>
      <NavBar />
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
                <Box as="form" onSubmit={formik.handleSubmit} spacing={6}>
                  <FormControl
                    isRequired
                    isInvalid={formik.errors.origin && formik.touched.origin}
                  >
                    <FormLabel>What is your origin place?</FormLabel>
                    <Input
                      name="origin"
                      value={formik.values.origin}
                      placeholder="Origin..."
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.origin}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isRequired
                    isInvalid={
                      formik.errors.destination && formik.touched.destination
                    }
                  >
                    <FormLabel>
                      What is your destination you want to travel?
                    </FormLabel>

                    <Input
                      name="destination"
                      value={formik.values.destination}
                      placeholder="destination..."
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>
                      {formik.errors.destination}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      Do you have any comments about this travel? Let us know!
                    </FormLabel>
                    <Textarea
                      name="comment"
                      value={formik.values.comment}
                      placeholder="Type here..."
                      onChange={formik.handleChange}
                    />
                  </FormControl>
                  <Button
                    fontFamily={"heading"}
                    mt={8}
                    w={"full"}
                    bgGradient="linear(to-r,teal.400,teal.300)"
                    color={"white"}
                    _hover={{
                      bgGradient: "linear(to-r, teal.400,teal.300)",
                      boxShadow: "xl",
                    }}
                    type="submit"
                  >
                    Submit my ideal trip
                  </Button>
                </Box>
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
