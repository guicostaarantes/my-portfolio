import React from "react";

import { Grid, Typography, Container, Button } from "@material-ui/core";

import useHeaderStyles from "../styles/header";

import face from "../assets/face.png";

function Header() {
  const style = useHeaderStyles();

  const greeting = () => {
    const time = new Date();
    const hour = Math.floor(time.getHours());
    if (hour >= 5 && hour < 12) {
      return "Bom dia!";
    }
    if (hour >= 12 && hour < 18) {
      return "Boa tarde!";
    }
    return "Boa noite!";
  };

  return (
    <div className={style.root}>
      <Container className={style.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} className={style.containerItem}>
            <Typography variant="h2" className={style.text}>
              {greeting()}
            </Typography>
            <Typography variant="h4" className={style.text}>
              Eu sou o Guilherme e eu desenvolvo software.
            </Typography>
            <Typography variant="h4" className={style.text}>
              Esse é o meu portfolio.
            </Typography>
            <Grid>
              <Button size="large" variant="contained" className={style.button}>
                Quero ver
              </Button>
              <Button size="large" variant="contained" className={style.button}>
                Direto ao assunto
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} className={style.containerItem}>
            <img width={400} src={face} alt="face" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
