/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import RecentReviews from "./RecentReviews";
import ReviewForm from "./ReviewForm";
import React, { useState, useEffect } from 'react';
import { useFirebase } from "../components/FirebaseContex";
import { onAuthStateChanged } from "firebase/auth";
function Information() {
  const [user, setUser] = useState();
    const [userImageUrl, setUserImageUrl] = useState();
    const { auth } = useFirebase();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setUserImageUrl(user?.photoURL);
        });


        return () => unsubscribe();
    }, [auth]);
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2"> Más de 3.000 usuarios</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            han confiado en nosotros.
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            contamos con 40 años de experiencia, 4.500 sistemas y 3.000 usuarios.
          </MKTypography>
        </Grid>
        <RecentReviews />
        {user? <ReviewForm /> : <> <center><h1>Inicia sesión para agregar tu reseña</h1></center> </>}
        

        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
