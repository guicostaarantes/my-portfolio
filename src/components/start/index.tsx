import React from "react";

import { useTranslation } from "react-i18next";

import {
  Grid,
  Typography,
  Container,
  Button,
  ButtonGroup,
} from "@material-ui/core";

import { Link } from "react-scroll";

import useStyles from "./styles";

import wave1 from "../../assets/wave1.svg";
import face from "../../assets/face.png";

import ReactCountryFlag from "react-country-flag";

function Start() {
  const { t, i18n } = useTranslation();

  const style = useStyles();

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
              <Link to="aboutme" duration={800} smooth={true}>
                <Button
                  size="large"
                  variant="contained"
                  className={style.button}
                >
                  {t("header:who")}
                </Button>
              </Link>
              <Link to="portfolio" duration={1200} smooth={true} offset={40}>
                <Button
                  size="large"
                  variant="contained"
                  className={style.button}
                >
                  {t("header:show_me")}
                </Button>
              </Link>
              <Link to="contact" duration={1600} smooth={true}>
                <Button
                  size="large"
                  variant="contained"
                  className={style.button}
                >
                  {t("header:straight_to_the_point")}
                </Button>
              </Link>
              <ButtonGroup variant="contained" className={style.button}>
                {i18n.languages
                  .filter((lng) => lng.length === 5)
                  .sort((a, b) => (a < b ? 1 : -1))
                  .map((lng) => (
                    <Button
                      disabled={lng === i18n.language}
                      onClick={() => i18n.changeLanguage(lng)}
                      key={lng}
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

export default Start;
