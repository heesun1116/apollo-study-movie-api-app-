import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Movie = ({ id, medium_cover_image, isLiked }) => {
  const [toggleMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id), isLiked },
  });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={medium_cover_image} />
      </Link>
      <Button onClick={toggleMovie}>{isLiked ? "Unlike" : "Like"}</Button>
    </Container>
  );
};

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;
const Container = styled.div`
  height: 350px;
  width: 100%;
`;
const Poster = styled.div`
  border-radius: 7px;
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;
const Button = styled.button`
  width: 100px;
`;
export default Movie;
