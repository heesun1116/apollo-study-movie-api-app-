import React from "react";
import { gql } from "apollo-boost";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      language
      rating
      medium_cover_image
      description_intro
      id
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, { variables: { id: +id } });
  console.log(data);
  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
        {!loading && data.movie && (
          <>
            <Subtitle>
              {data.movie.language} * {data.movie.rating}
            </Subtitle>
            <Description>{data.movie.description_intro}</Description>
          </>
        )}
      </Column>
      {!loading && data.movie && (
        <Poster bg={data.movie.medium_cover_image}></Poster>
      )}
      {/* data.?movie?.medium_cover_image */}
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;
const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;
const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: 28px;
`;
const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  width: 25%;
  background-color: transparent;
  height: 60%;
  background-size: cover;
  background-position: center center;
`;
export default Detail;
