import React from "react";

import { Grid, Typography, Container } from "@material-ui/core";

import { Light as Code } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import vs2015 from "react-syntax-highlighter/dist/esm/styles/hljs/vs2015";

import cv from "../assets/cv.json";
import beautify from "json-beautify";

import useAboutMeStyles from "../styles/aboutme";

Code.registerLanguage("json", json);

function AboutMe() {
  const style = useAboutMeStyles();

  const yearsPastSince = (birthday: Date) => {
    const diff = Date.now() - birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div className={style.root}>
      <Container className={style.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className={style.containerItem}>
            <Typography variant="h2" className={style.text}>
              Sobre mim
            </Typography>
            <Typography variant="h5" className={style.text}>
              Sou de Belo Horizonte/MG e tenho{" "}
              {yearsPastSince(new Date("1994-06-25"))} anos. Sou apaixonado por
              tecnologia da informação, somando{" "}
              {yearsPastSince(new Date("2013-03-01"))} anos de experiência entre
              empregos, estágios e empreendedorismo.
            </Typography>
            <Typography variant="h5" className={style.text}>
              Hoje a stack com a qual aprendo e desenvolvo é NodeJS, ReactJS e
              React Native. Mas não fujo de desafios e já desenvolvi projetos
              pessoais em PHP, Python, Java e Kotlin.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={style.containerItem}>
            <Code language="json" style={vs2015} showLineNumbers={true}>
              {beautify(
                { ...cv, age: yearsPastSince(new Date("1994-06-25")) },
                null,
                2,
                10
              )}
            </Code>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutMe;
