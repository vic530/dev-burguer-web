import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Background from '../../assets/background.svg';
import BannerHamburguer from '../../assets/Banner-Hamburguer.svg';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding-bottom: 30px;

  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('${Background}');
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
      color: #f4f4f4;
      font-size: 20px;
    }
  }
`;

export const CategorysMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategorysButtons = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  font-size: 24px;
  color: ${(props) => (props.$isActiveCategory ? '#9758a6' : '#696969')};
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6'};
`;

export const HomeButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  text-decoration: none;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 8px 16px;
  margin: auto;
  width: fit-content;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  p {
    font-size: 16px;
    font-weight: 600;
    color: #5c2669;
    transition: color 0.2s ease;
  }

  &:hover {
    background-color: rgba(151, 88, 166, 0.1);
    transform: translateY(-1px);

    h1 {
      color: #9758a6;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
`;
