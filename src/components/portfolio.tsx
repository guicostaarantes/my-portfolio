import React from "react";

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

import useHeaderStyles from "../styles/portfolio";

import projects from "../assets/projects.json";

import wave2 from "../assets/wave2.svg";

function Portfolio() {
  const style = useHeaderStyles();

  return (
    <div className={style.root}>
      <img src={wave2} alt="background" className={style.background} />
      <Container className={style.container}>
        <CarouselProvider
          naturalSlideWidth={15}
          naturalSlideHeight={9}
          totalSlides={3}
          infinite={true}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} className={style.containerItem}>
              <Typography variant="h3" className={style.text}>
                Projetos
              </Typography>
              <Slider style={{ margin: "20px 0" }}>
                {projects.map((project) => (
                  <Slide className={style.project} index={0}>
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
                {projects.map((project) => (
                  <Slide className={style.youtube} index={0}>
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
