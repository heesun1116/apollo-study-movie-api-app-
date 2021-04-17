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
      {!loading &&
        data.movies &&
        data.movies.map((m) => <Movie key={m.id} id={m.id} />)}
    </Container>
  );
};
const Container = styled.div``;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  font-weight: bold;
  align-items: center;
  justify-content: center;
  color: white;
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
export default Home;
