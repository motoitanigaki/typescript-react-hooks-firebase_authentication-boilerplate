import React, { Fragment, useEffect, useState } from "react";

import { Button, Container, Grid, Typography } from "@material-ui/core";

import auth from "../firebase";

const Home = (props: any) => {
  const [currentUser, setCurrentUser] = useState<null | object>(null);

  useEffect(() => {
    // if not logged in, redirect to login page
    auth.onAuthStateChanged(user => {
      user ? setCurrentUser(user) : props.history.push("/login");
    });
  }, []);

  return (
    <Fragment>
      <Container>
        <Grid container style={{ marginTop: "1em" }}>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            <Typography>Here is the user's information</Typography>
            <Typography
              variant="caption"
              style={{
                paddingTop: "2em",
                paddingBottom: "2em",
                whiteSpace: "pre"
              }}
            >
              {currentUser && JSON.stringify(currentUser, null, 4)}
            </Typography>
            <Button
              fullWidth
              onClick={async event => {
                try {
                  await auth.signOut();
                  props.history.push("/login");
                } catch (error) {
                  alert(error.message);
                }
              }}
              style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
            >
              Logout
            </Button>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Home;
