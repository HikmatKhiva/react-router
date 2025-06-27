import React from "react";
import classes from "../css/hero.module.css";
import { Button, Container, Overlay, Text, Title } from "@mantine/core";

const HomePage = () => {
  return (
    <section className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>Shop API</Title>

        <Container size={640}>
          <Text size="lg"  className={classes.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            ratione quod sunt nobis sequi quas, at est deserunt aspernatur
            delectus.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button
            className={`${classes.control} ${classes.secondaryControl}`}
            size="lg"
          >
            Live demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
