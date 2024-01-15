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

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={40}
              suffix="+"
              title="Cuatro décadas en la industria"
              description="TECNIALARMAS LTDA es una compañía de Seguridad Electrónica fundada en 1979, la cual representa a HONEYWELL Security para la Costa Norte Colombiana en calidad de Integradores."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={30}
              suffix="+"
              title="Variedad de productos"
              description="Contamos con más de 30 tipos de productos para la seguridad de su empresa o negocio."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={4}
              title="Centrales de Monitoreo"
              description="hemos instalado cuatro (4) Centrales de Monitoreo a otras empresas de seguridad reconocidas de la región, asesoramos a dos compañías en Puerto Príncipe, Haití y en Quito Ecuador, en TECNIALARMAS LTDA contamos con 37 años de experiencia, 4.500 sistemas y 3.000 usuarios."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
