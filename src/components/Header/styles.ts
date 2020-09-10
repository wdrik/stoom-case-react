import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--color-white);
  width: 100%;
  height: 72px;
  margin-bottom: 32px;

  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
  width: 1080px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 48px;
  }
`;
