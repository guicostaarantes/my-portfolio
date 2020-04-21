import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { Grid, Typography, Container, IconButton } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import YouTube from "react-youtube";

import usePortfolioStyles from "../styles/portfolio";

import projectJson from "../assets/projects.json";

import wave2 from "../assets/wave2.svg";
import { Language } from "../i18n";

function Portfolio() {
  const { t, i18n } = useTranslation();

  const [projects, setProjects] = useState(
    projectJson[i18n.language as Language]
  );

  const style = usePortfolioStyles();

  useEffect(() => {
    setProjects(projectJson[i18n.language as Language]);
  }, [i18n.language]);

  return (
    <div className={style.root}>
      <img src={wave2} alt="background" className={style.background} />
      <Container>
        <CarouselProvider
          naturalSlideWidth={15}
          naturalSlideHeight={9}
          totalSlides={3}
          infinite={true}
        >
          <Grid container spacing={2} className={style.containerGrid}>
            <Grid item xs={12} md={4} className={style.containerItem}>
              <Typography variant="h3" className={style.text}>
                {t("projects:title")}
              </Typography>
              <Slider style={{ margin: "20px 0" }}>
                {projects.map((project, index) => (
                  <Slide className={style.project} index={index} key={index}>
                    <Typography
                      variant="h4"
                      className={style.text}
                      style={{ marginBottom: "0.2em" }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="h6" className={style.text}>
                      {project.desc}
                    </Typography>
                  </Slide>
                ))}
              </Slider>
              <Grid item>
                <ButtonBack className="MuiButtonBase-root MuiIconButton-root">
                  <FontAwesomeIcon size="2x" color="white" icon={faArrowLeft} />
                </ButtonBack>
                <ButtonNext className="MuiButtonBase-root MuiIconButton-root">
                  <FontAwesomeIcon
                    size="2x"
                    color="white"
                    icon={faArrowRight}
                  />
                </ButtonNext>
                <IconButton className={style.hidden}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} className={style.containerItem}>
              <Slider>
                {projects.map((project, index) => (
                  <Slide className={style.youtube} index={index} key={index}>
                    <YouTube videoId={project.video} />
                  </Slide>
                ))}
              </Slider>
            </Grid>
          </Grid>
        </CarouselProvider>
      </Container>
    </div>
  );
}

export default Portfolio;
