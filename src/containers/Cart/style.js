import styled from 'styled-components';

import Background from '../../assets/background.svg';
import Texture from '../../assets/texture.svg';

export const Container = styled.section`
  width: 100%;
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('${Background}');
  display: flex;
  background-color: #f0f0f0;
  flex-direction: column;
  min-height: 100vh;
`;
export const Banner = styled.div`
  background: url('${Texture}') no-repeat center / cover;
  background-color: #1f1f1f;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  > img {
    width: 150px;
  }
`;
export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: #61a120;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 12px;
  position: relative;

  &::after {
    position: absolute;
    left: calc(50% - 26px);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: #61a120;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 20px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;
