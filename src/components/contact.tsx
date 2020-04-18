import React from "react";

import { useTranslation } from "react-i18next";

import {
  Grid,
  Typography,
  Container,
  Button,
  TextField,
} from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import useHeaderStyles from "../styles/contact";

function Header() {
  const { t } = useTranslation();

  const style = useHeaderStyles();

  return (
    <div className={style.root}>
      <Container className={style.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} className={style.containerItem}>
            <Typography variant="h2" className={style.text}>
              {t("contact:title")}
            </Typography>
            <Button
              size="large"
              variant="contained"
              className={style.button}
              startIcon={<FontAwesomeIcon icon={faGithub} />}
            >
              {t("contact:github")}
            </Button>
            <Button
              size="large"
              variant="contained"
              className={style.button}
              startIcon={<FontAwesomeIcon icon={faLinkedin} />}
            >
              {t("contact:linkedin")}
            </Button>
            <Button
              size="large"
              variant="contained"
              className={style.button}
              startIcon={<FontAwesomeIcon icon={faEnvelope} />}
            >
              {t("contact:mail")}
            </Button>
          </Grid>
          <Grid item xs={12} md={8} className={style.containerItem}>
            <TextField
              variant="outlined"
              label={t("contact:your_name")}
              className={style.input}
            />
            <TextField
              variant="outlined"
              label={t("contact:your_contact")}
              className={style.input}
            />
            <TextField
              variant="outlined"
              multiline={true}
              rows={8}
              label={t("contact:message")}
              className={style.input}
            />
            <Button
              size="large"
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faPaperPlane} />}
            >
              {t("contact:send")}
            </Button>
          </Grid>
        </Grid>
        <Grid className={style.end}>
          <Typography className={style.text}>{t("contact:end")}</Typography>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
