/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from "react";

const Container = ({children}) => <div className="container" css={styles}>{children}</div>

const styles = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default Container;