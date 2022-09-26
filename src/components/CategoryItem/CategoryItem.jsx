import styled from "styled-components";
import React from "react";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/allproductsByCate/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>MUA NGAY</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
