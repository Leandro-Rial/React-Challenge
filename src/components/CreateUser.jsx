import React, { useContext, useState } from "react";
import { GlobalState } from "../context/GlobalState";
import {
  Button,
  Box,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const initialValues = {
  email: "",
  name: "",
  age: 0,
}

const Add = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const { createUser } = useContext(GlobalState);
  
  const addUser = (user) => {
    try {
      
      createUser(user);
      
      setFormValues(initialValues)

    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <Container className="form">
      <Formik
        initialValues={formValues}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Email is required"),
          name: Yup.string()
            .min(2, "Name must be at least 2 characters")
            .max(50, "Name must be up to 50 characters")
            .required("Name is required"),
          age: Yup.number()
            .required("Please supply your age")
            .min(18, "You must be at least 18 years")
            .max(60, "You must be at most 60 years"),
        })}
        onSubmit={(user) => {
          addUser(user);
        }}
      >
        {({
          errors,
          isValid,
          touched,
          dirty,
          values,
          handleChange,
          handleSubmit,
        }) => (
          <>
            <Form
              onSubmit={handleSubmit}
              className="animate__animated animate__fadeIn"
            >
              <Box sx={{ mb: 3 }}>
                <Typography color="textPrimary" variant="h2">
                  Add User
                </Typography>
              </Box>
              <Field
                name="email"
                type="text"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Email Address"
                value={values.email}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              />
              <Box height={14} />
              <Field
                name="name"
                type="text"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Nombre"
                value={values.name}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.name) && Boolean(touched.name)}
                helperText={Boolean(touched.name) && errors.name}
              />
              <Box height={14} />
              <Field
                name="age"
                type="number"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Edad"
                value={values.age}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.age) && Boolean(touched.age)}
                helperText={Boolean(touched.age) && errors.age}
              />
              <Box height={16} />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={!dirty || !isValid}
              >
                Create user
              </Button>
            </Form>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default Add;
