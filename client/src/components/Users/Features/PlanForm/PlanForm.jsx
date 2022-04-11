import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postFlight } from "../../../../redux/actions/actions";

function PlanForm({ type }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
 
  const formik = useFormik({
    initialValues: {
      origin: "",
      destination: "",
      comment: "",
    },
    // funcionality: changeFunctionality(),
    validationSchema: Yup.object({
      origin: Yup.string()
        .required("This field is required!")
        .min(4, "The origin place is too short!"),
      destination: Yup.string()
        .required("This field is required!")
        .min(4, "The destination place is too short!"),
      comment: Yup.string(),
    }),

    onSubmit: (values, actions) => {
      if (type === "create") {
        navigate("/home");
        dispatch(postFlight(values));
        actions.resetForm();
        toast({
          title: "Flight Plan Created Successfully!",
          status: "success",
          duration: 3000,
        });
      }
      // else if (type==="edit"){
      //   toast({
      //     title: "Plan updated successfully!",
      //     status: "success",
      //     duration: 3000,
      //   });
      // }
    },
  });
  return (
    <Box as="form" onSubmit={formik.handleSubmit} spacing="15px">
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
        isInvalid={formik.errors.destination && formik.touched.destination}
      >
        <FormLabel>What is your destination you want to travel?</FormLabel>

        <Input
          name="destination"
          value={formik.values.destination}
          placeholder="destination..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormErrorMessage>{formik.errors.destination}</FormErrorMessage>
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
        {type === "create" ? "Submit my ideal trip" : "Update my plan"}
      </Button>
    </Box>
  );
}

export default PlanForm;
