import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: #bbb;
  height: 72px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  width: 1080px;
  height: 100%;
  margin: 0 auto;
  background: #aaa;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 48px;
  }
`;
