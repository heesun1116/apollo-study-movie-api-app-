import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Movie = ({ id }) => {
  return (
    <div>
      <Link to={`/${id}`}>{id}</Link>
    </div>
  );
};

export default Movie;
