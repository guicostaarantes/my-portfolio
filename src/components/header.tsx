import React from "react";

import { useTranslation } from "react-i18next";

import { Grid, Typography, Container, Button } from "@material-ui/core";

import useHeaderStyles from "../styles/header";

import wave1 from "../assets/wave1.svg";
import face from "../assets/face.png";

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
      <Container className={style.container}>
        <Grid container spacing={2}>
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
                {t("header:show_me")}
              </Button>
              <Button size="large" variant="contained" className={style.button}>
                {t("header:straight_to_the_point")}
              </Button>
              {i18n.languages
                .filter((lng) => lng.length === 5 && lng !== i18n.language)
                .map((lng) => (
                  <Button
                    size="large"
                    variant="contained"
                    className={style.button}
                    onClick={() => i18n.changeLanguage(lng)}
                  >
                    {t(`header:switch_to`, { lng })}
                  </Button>
                ))}
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
