import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  HStack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  getFlightsAdmin,
  postFlightAdmin,
} from "../../../../../../../../redux/actions/actions";

const CreateForm = () => {
  const dispatch = useDispatch();

  const toast = useToast();
  const [isFocus, setIsFocus] = useState(false);
  const formik = useFormik({
    initialValues: {
      weekday: 0,
      departure: {
        iataCode: "",
      },
      arrival: {
        iataCode: "",
      },
      aircraft: {
        modelCode: "",
        model: "",
      },
      airline: {
        iataCode: "",
      },
      flight: {
        number: 0,
        iataNumber: "",
        iacoNumber: "",
      },
      date: "",
      price: 0,
    },

    /*-------Fields validation with Yup---------- */
    validationSchema: Yup.object({
      weekday: Yup.number().required("weekday is required!"),
      departure: Yup.object({
        iataCode: Yup.string()
          .required("Depature is required!")
          .min(3, "The info is too short!"),
      }),
      arrival: Yup.object({
        iataCode: Yup.string()
          .required("Arrival is required!")
          .min(3, "The info is too short!"),
      }),
      price: Yup.number().required("Price is required!"),
      airline: Yup.object({
        iataCode: Yup.string().required("Airline is required!"),
      }),
      date: Yup.string().required("The date is required"),
      number: Yup.number().required("Flight number is required!"),
      flight: Yup.object({
        iacoNumber: Yup.string()
          .required("IACO Number is required!")
          .min(3, "The info is too short!"),
        iataNumber: Yup.string()
          .required("IACO Number is required!")
          .min(3, "The info is too short!"),
        number: Yup.number().required("The Flight number is required!"),
      }),
      aircraft: Yup.object({
        modelCode: Yup.string().required(
          "The aircraft Model Code is required!"
        ),
        model: Yup.string().required("The aircraft model is required!"),
      }),
    }),
    // onSubmit: (values, actions) => {
    //   console.log("form values and structure...", values);
    //   dispatch(postFlightAdmin(values));
    //   actions.resetForm();
    //   toast({
    //     title: "Flight created successfully",
    //     status: "success",
    //     duration: 3000,
    //   });
    // },
  });

  const submited = () => {
    dispatch(postFlightAdmin(formik.values));
    dispatch(getFlightsAdmin());

    
    toast({
      title: "Flight created successfully",
      status: "success",
      duration: 3000,
    });
  formik.values = formik.initialValues

  };
  const textColor = useColorModeValue("black", "gray.200");
  return (
    <Box
      as="form"
      onSubmit={formik.handleSubmit}
      m={"3"}
      p={"6"}
      borderRadius="20"
      border="1px"
      borderColor={textColor}
      justifyContent={"center"}
    >
      <Text>Create a Flight</Text>
      <HStack spacing={"5"}>
        <FormControl
          isRequired
          isInvalid={formik.errors.weekday && formik.touched.weekday}
        >
          <FormLabel>Count of weekday</FormLabel>
          <Input
            type="number"
            min={0}
            max={10}
            name="weekday"
            value={formik.values.weekday}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <FormErrorMessage>{formik.errors.weekday}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={
            formik.errors.departure?.iataCode &&
            formik.touched.departure?.iataCode
          }
        >
          <FormLabel>Departure Code</FormLabel>
          <Input
            name="departure.iataCode"
            value={formik.values.departure.iataCode}
            placeholder="departure..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>
            {formik.errors.departure?.iataCode}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={
            formik.errors.arrival?.iataCode && formik.touched.arrival?.iataCode
          }
        >
          <FormLabel>Arrival Code</FormLabel>

          <Input
            name="arrival.iataCode"
            value={formik.values.arrival.iataCode}
            placeholder="arrival..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.arrival?.iataCode}</FormErrorMessage>
        </FormControl>
      </HStack>
      <br />
      <Text>Aircraft Info</Text>
      <HStack spacing={"5"}>
        <FormControl
          isRequired
          isInvalid={
            formik.errors.airline?.iataCode && formik.touched.airline?.iataCode
          }
        >
          <FormLabel>airline of the flight</FormLabel>
          <Input
            name="airline.iataCode"
            value={formik.values.airline.iataCode}
            placeholder="airline..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.airline?.iataCode}</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={
            formik.errors.aircraft?.modelCode &&
            formik.touched.aircraft?.modelCode
          }
        >
          <FormLabel>Model Code</FormLabel>
          <Input
            name="aircraft.modelCode"
            value={formik.values.aircraft.modelCode}
            placeholder="modelCode..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>
            {formik.errors.aircraft?.modelCode}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={
            formik.errors.aircraft?.model && formik.touched.aircraft?.model
          }
        >
          <FormLabel>Model </FormLabel>
          <Input
            name="aircraft.model"
            value={formik.values.aircraft.model}
            placeholder="model..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.aircraft?.model}</FormErrorMessage>
        </FormControl>
      </HStack>
      <br />
      <Text>Flight Info</Text>
      <HStack spacing={"5"}>
        <FormControl
          isRequired
          isInvalid={
            formik.errors.flight?.number && formik.touched.flight?.number
          }
        >
          <FormLabel>Number of the flight</FormLabel>
          <Input
            type="number"
            min={0}
            name="flight.number"
            value={formik.values.flight.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.flight?.number}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={
            formik.errors.flight?.iataNumber &&
            formik.touched.flight?.iataNumber
          }
        >
          <FormLabel>IATA Number</FormLabel>
          <Input
            name="flight.iataNumber"
            value={formik.values.flight.iataNumber}
            placeholder="iata Number..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>
            {formik.errors.flight?.iataNumber}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={
            formik.errors.flight?.iacoNumber &&
            formik.touched.flight?.iacoNumber
          }
        >
          <FormLabel>IACO Number </FormLabel>
          <Input
            name="flight.iacoNumber"
            value={formik.values.flight.iacoNumber}
            placeholder="iacoNumber..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>
            {formik.errors.flight?.iacoNumber}
          </FormErrorMessage>
        </FormControl>
      </HStack>
      <br />
      <HStack spacing={"5"}>
        <FormControl
          isRequired
          isInvalid={formik.errors.price && formik.touched.price}
        >
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            min={0}
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.price}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={formik.errors.date && formik.touched.date}
        >
          <FormLabel>Depature Date</FormLabel>
          <Input
            value={formik.values.date}
            name="date"
            htmlSize={12}
            placeholder="Departure Date"
            type={isFocus ? "date" : "text"}
            onChange={formik.handleChange}
            onFocus={(e) => {
              setIsFocus(true);
            }}
            onBlur={formik.handleBlur}
          />
        </FormControl>
      </HStack>

      <Button
        fontFamily={"heading"}
        mt={8}
        bgGradient="linear(to-r,teal.400,teal.300)"
        _hover={{
          bgGradient: "linear(to-r, teal.800,teal.400)",
          boxShadow: "xl",
        }}
        type="submit"
        onClick={submited}
      >
        Create fligth!
      </Button>
    </Box>
  );
};

export default CreateForm;
