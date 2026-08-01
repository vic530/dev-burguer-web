import styled from 'styled-components';

import BannerHamburguer from '../../assets/Banner-Hamburguer.svg';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 480px;
  position: relative;

  background: url('${BannerHamburguer}') no-repeat;
  background-color: #1f1f1f;
  background-position: center;
  background-size: cover;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: #f4f4f4;
    position: absolute;

    right: 20%;
    top: 30%;

    span {
      display: block;
      color: #61a120;
      font-size: 20px;
    }
  }
`;

export const CategorysMenu = styled.div``;
export const ProductsContainer = styled.div``;
