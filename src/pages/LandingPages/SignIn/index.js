

import React, { useState, useEffect } from 'react';

// react-router-dom components


// @mui material components
import Card from "@mui/material/Card";

import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons

import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import MKButton from "components/MKButton";

import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import Header from "examples/Navbars/DefaultNavbar/Navbar";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useFirebase } from '../../../pages/Presentation/components/FirebaseContex';
function SignInBasic() {
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

  const loginWithGoogle = async () => {

    const provider = new GoogleAuthProvider();

    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error('Error al iniciar sesión con Google:', error.message);
    }
};

const logout = async () => {

  try {
      await signOut(auth);
  } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
  }
};
  return (
    <>
      
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox >
                  <MKBox mt={4} mb={1}>
                    {user?
                    <>
                    <h3>Bienvenido {user?.displayName}</h3>
                    <center>
                    <div className="user-avatar" style={{ backgroundImage: `url(${userImageUrl})` }}></div></center>
                    </>:
                    ""
                    }
                  <MKButton variant="gradient" color="info" fullWidth>  
                      <button onClick={user ? logout : loginWithGoogle} style={{backgroundColor:"transparent",width:"100%", border:"none",color:"white"}}>{user?"Cerrar sesión":"Iniciar sesión con Google"}</button>
                    </MKButton> 
                     
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      
    </>
  );
}

export default SignInBasic;
