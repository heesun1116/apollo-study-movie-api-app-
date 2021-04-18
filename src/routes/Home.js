import React from "react";
import styled from "styled-components";
// use graphQL in react
import { useQuery } from "@apollo/client";
import { gql } from "apollo-boost";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;
const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>Apollo 2021</Title>
        <Subtitle>I love GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {!loading && data.movies && (
        <Movies>
          {data.movies.map((m) => (
            <Movie
              key={m.id}
              id={m.id}
              medium_cover_image={m.medium_cover_image}
              isLiked={m.isLiked}
            />
          ))}
        </Movies>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  font-weight: bold;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
`;
const Title = styled.div`
  padding-bottom: 30px;
  font-size: 3rem;
`;
const Subtitle = styled.h3`
  font-size: 1.5rem;
`;
const Loading = styled.div`
  text-align: center;
  font-size: 3rem;
`;
const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 80%;
  position: relative;
  top: -50px;
`;
export default Home;
