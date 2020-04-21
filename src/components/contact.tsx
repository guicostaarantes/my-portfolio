import React from "react";

import { useTranslation } from "react-i18next";

import { Grid, Typography, Container, Button } from "@material-ui/core";

import { Element } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import useContactStyles from "../styles/contact";

import ContactForm from "./contactForm";

function Contact() {
  const { t } = useTranslation();

  const style = useContactStyles();

  return (
    <div className={style.root}>
      <Element name="contact" />
      <Container>
        <Grid container spacing={2} className={style.containerGrid}>
          <Grid item xs={12} md={4} className={style.containerItem}>
            <Typography variant="h2" className={style.text}>
              {t("contact:title")}
            </Typography>
            <Button
              size="large"
              variant="contained"
              className={style.button}
              href="https://github.com/guicostaarantes"
              target="blank"
              startIcon={<FontAwesomeIcon icon={faGithub} />}
            >
              {t("contact:github")}
            </Button>
            <Button
              size="large"
              variant="contained"
              className={style.button}
              href="https://www.linkedin.com/in/guilherme-arantes-07b261132/"
              target="blank"
              startIcon={<FontAwesomeIcon icon={faLinkedin} />}
            >
              {t("contact:linkedin")}
            </Button>
            <Button
              size="large"
              variant="contained"
              className={style.button}
              href="mailto:arantes.g@outlook.com"
              target="blank"
              startIcon={<FontAwesomeIcon icon={faEnvelope} />}
            >
              {t("contact:mail")}
            </Button>
          </Grid>
          <Grid item xs={12} md={8} className={style.containerItem}>
            <ContactForm />
          </Grid>
        </Grid>
        <Grid className={style.end}>
          <Typography className={style.text}>{t("contact:end")}</Typography>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
