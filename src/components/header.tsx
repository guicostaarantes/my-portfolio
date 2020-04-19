import React from "react";

import { useTranslation } from "react-i18next";

import {
  Grid,
  Typography,
  Container,
  Button,
  ButtonGroup,
} from "@material-ui/core";

import useHeaderStyles from "../styles/header";

import wave1 from "../assets/wave1.svg";
import face from "../assets/face.png";

import ReactCountryFlag from "react-country-flag";

function Header() {
  const { t, i18n } = useTranslation();

  const style = useHeaderStyles();

  const greeting = () => {
    const time = new Date();
    const hour = Math.floor(time.getHours());
    if (hour >= 5 && hour < 12) {
      return "header:good_morning";
    }
    if (hour >= 12 && hour < 18) {
      return "header:good_afternoon";
    }
    return "header:good_evening";
  };

  return (
    <div className={style.root}>
      <img src={wave1} alt="background" className={style.background} />
      <Container>
        <Grid container spacing={2} className={style.containerGrid}>
          <Grid item xs={12} md={8} className={style.containerItem}>
            <Typography variant="h2" className={style.text}>
              {t(greeting())}
            </Typography>
            <Typography variant="h4" className={style.text}>
              {t("header:hello1")}
            </Typography>
            <Typography variant="h4" className={style.text}>
              {t("header:hello2")}
            </Typography>
            <Grid>
              <Button size="large" variant="contained" className={style.button}>
                {t("header:who")}
              </Button>
              <Button size="large" variant="contained" className={style.button}>
                {t("header:show_me")}
              </Button>
              <Button size="large" variant="contained" className={style.button}>
                {t("header:straight_to_the_point")}
              </Button>
              <ButtonGroup variant="contained" className={style.button}>
                {i18n.languages
                  .filter((lng) => lng.length === 5)
                  .sort((a, b) => (a < b ? 1 : -1))
                  .map((lng) => (
                    <Button
                      disabled={lng === i18n.language}
                      onClick={() => i18n.changeLanguage(lng)}
                    >
                      <ReactCountryFlag
                        svg
                        countryCode={lng.slice(3)}
                        style={{ fontSize: 30 }}
                      />
                    </Button>
                  ))}
              </ButtonGroup>
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
