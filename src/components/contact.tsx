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
  const { t, i18n } = useTranslation();

  const style = useHeaderStyles();

  return (
    <div className={style.root}>
      <Container className={style.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} className={style.containerItem}>
            <Typography variant="h2" className={style.text}>
              Links e Contato
            </Typography>
            <Button
              size="large"
              variant="contained"
              className={style.button}
              startIcon={<FontAwesomeIcon icon={faGithub} />}
            >
              Github
            </Button>
            <Button
              size="large"
              variant="contained"
              className={style.button}
              startIcon={<FontAwesomeIcon icon={faLinkedin} />}
            >
              Linkedin
            </Button>
            <Button
              size="large"
              variant="contained"
              className={style.button}
              startIcon={<FontAwesomeIcon icon={faEnvelope} />}
            >
              Email
            </Button>
          </Grid>
          <Grid item xs={12} md={8} className={style.containerItem}>
            <TextField
              variant="outlined"
              label="Seu nome"
              className={style.input}
            />
            <TextField
              variant="outlined"
              label="Seu contato para eu te retornar"
              className={style.input}
            />
            <TextField
              variant="outlined"
              multiline={true}
              rows={8}
              label="Mensagem"
              className={style.input}
            />
            <Button
              size="large"
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faPaperPlane} />}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
