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
import { postFlightAdmin } from "../../../../../../../../redux/actions/actions";

const CreateForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [isFocus, setIsFocus] = useState(false);
  const formik = useFormik({
    initialValues: {
      weekdays: 0,
      depature: "",
      arrival: "",
      aircraft: {
        modelCode: "",
        model: "",
      },
      airline: "",
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
      weekdays: Yup.number().required("weekdays is required!"),
      depature: Yup.string()
        .required("Depature is required!")
        .min(3, "The info is too short!"),
      arrival: Yup.string()
        .required("Arrival is required!")
        .min(3, "The info is too short!"),
      price: Yup.number().required("Price is required!"),
      airline: Yup.string().required("Airline is required!"),
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

    onSubmit: (values, actions) => {
      console.log("form values and structure...", values);
      actions.resetForm();
      dispatch(postFlightAdmin(values));
      toast({
        title: "Flight created successfully!",
        status: "success",
        duration: 3000,
      });
    },
  });

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
          isInvalid={formik.errors.weekdays && formik.touched.weekdays}
        >
          <FormLabel>Count of weekdays</FormLabel>
          <Input
            type="number"
            min={0}
            max={10}
            name="weekdays"
            value={formik.values.weekdays}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <FormErrorMessage>{formik.errors.weekdays}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={formik.errors.depature && formik.touched.depature}
        >
          <FormLabel>Depature Place</FormLabel>
          <Input
            name="depature"
            value={formik.values.depature}
            placeholder="depature..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.depature}</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={formik.errors.arrival && formik.touched.arrival}
        >
          <FormLabel>Arrival Place</FormLabel>

          <Input
            name="arrival"
            value={formik.values.arrival}
            placeholder="arrival..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.arrival}</FormErrorMessage>
        </FormControl>
      </HStack>
      <br />
      <Text>Aircraft Info</Text>
      <HStack spacing={"5"}>
        <FormControl
          isRequired
          isInvalid={formik.errors.airline && formik.touched.airline}
        >
          <FormLabel>airline of the flight</FormLabel>
          <Input
            name="airline"
            value={formik.values.airline}
            placeholder="airline..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.airline}</FormErrorMessage>
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
            // _placeholder={{
            //   color: useColorModeValue("white", "Black"),
            // }}
            value={formik.values.date}
            name="date"
            htmlSize={12}
            placeholder="Departure Date"
            type={isFocus ? "date" : "text"}
            onChange={formik.handleChange}
            onFocus={(e) => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
              //  this.formik.handleBlur;
            }}
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
        // onClick={() => {
        //   console.log("los valores", formik.values);
        // }}
      >
        Create fligth!
      </Button>
    </Box>
  );
};

export default CreateForm;
