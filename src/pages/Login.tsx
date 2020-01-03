import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React, { Fragment, useContext, useEffect } from "react";

import {
  Button,
  Container,
  FormControl,
  Grid,
  LinearProgress,
  Link,
  Typography
} from "@material-ui/core";

import { AuthContext } from "../Auth";
import auth from "../firebase";
import { AuthSchema } from "./Signup";

const Login = (props: any) => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    // if logged in, redirect to home
    currentUser && props.history.push("/");
  }, [currentUser]);

  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={AuthSchema}
              onSubmit={async value => {
                try {
                  await auth.signInWithEmailAndPassword(
                    value.email,
                    value.password
                  );
                  props.history.push("/");
                } catch (error) {
                  alert(error.message);
                }
              }}
              render={({ submitForm, isSubmitting, isValid }) => (
                <Form>
                  {isSubmitting && <LinearProgress />}
                  <FormControl margin="normal" fullWidth>
                    <Field
                      style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                      name="email"
                      label="E-mail"
                      fullWidth
                      variant="outlined"
                      component={TextField}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <Field
                      style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                      name="password"
                      label="Password"
                      fullWidth
                      variant="outlined"
                      type="password"
                      component={TextField}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <Button
                      fullWidth
                      onClick={submitForm}
                      style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                      type="submit"
                      disabled={!isValid || isSubmitting}
                    >
                      Log in
                    </Button>
                    <Typography align="center">
                      <Link href="/signup">to signup</Link>
                    </Typography>
                  </FormControl>
                </Form>
              )}
            />
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Login;
