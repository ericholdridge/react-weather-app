/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from "react";

import Container from "../Container/Container";

const WeatherForm = (props) => {
  return (
    <Container>
      <form onSubmit={props.handleSubmit} css={styles}>
        <input onChange={props.handleInput} value={props.value} placeholder="Search City...."/>
      </form>
    </Container>
  );
};

const styles = css`
  width: 100%;
  input {
    width: 100%;
    max-width: 400px;
  }
`;

export default WeatherForm;
