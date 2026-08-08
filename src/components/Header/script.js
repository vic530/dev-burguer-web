import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.header`
  background: #1f1f1f;
  width: 100%;
  height: 72px;
  padding: 0 56px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  justify-content: space-between;

  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
export const HeaderLike = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 14 px;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #9758a6;
  }
`;
export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  cursor: pointer;

  &:hover {
    color: #9758a6;
  }
`;

export const Profiler = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;

  p {
    color: #fff;
    line-height: 90%;
    font-weight: 300;

    span {
      color: #9758a6;
      font-weight: 700;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;

  a {
    text-decoration: none;
    color: #fff;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #9758a6;
    }
  }
`;

export const Logout = styled.button`
  background: none;
  border: none;
  color: #ff3205;
  font-weight: 700;
  background-color: transparent;
  border: none;

  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #9758a6;
  }
`;
