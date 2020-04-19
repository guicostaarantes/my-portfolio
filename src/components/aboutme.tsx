import React from "react";

import { useTranslation } from "react-i18next";

import { Grid, Typography, Container } from "@material-ui/core";

import { Light as Code } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import vs2015 from "react-syntax-highlighter/dist/esm/styles/hljs/vs2015";

import cv from "../assets/cv.json";
import beautify from "json-beautify";

import useAboutMeStyles from "../styles/aboutme";

Code.registerLanguage("json", json);

function AboutMe() {
  const { t } = useTranslation();

  const style = useAboutMeStyles();

  const yearsPastSince = (birthday: Date) => {
    const now = new Date();
    const years = now.getFullYear() - birthday.getFullYear();
    birthday.setFullYear(now.getFullYear());
    const hasBirthdayPassed = birthday < now ? 0 : -1;
    return years + hasBirthdayPassed;
  };

  return (
    <div className={style.root}>
      <Container>
        <Grid container spacing={2} className={style.containerGrid}>
          <Grid item xs={12} md={6} className={style.containerItem}>
            <Typography
              variant="h3"
              className={style.text}
              style={{ marginBottom: "0.2em" }}
            >
              {t("aboutme:title")}
            </Typography>
            <Typography variant="h6" className={style.text}>
              {t("aboutme:text1", {
                born: yearsPastSince(new Date("1994-06-25")),
                started: yearsPastSince(new Date("2013-03-01")),
              })}
            </Typography>
            <Typography variant="h6" className={style.text}>
              {t("aboutme:text2")}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={style.containerItem}>
            <Code
              language="json"
              style={vs2015}
              showLineNumbers={true}
              className={style.code}
            >
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
