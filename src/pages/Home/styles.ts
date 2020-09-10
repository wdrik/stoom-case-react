import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;

  span {
    opacity: 0.7;
  }

  a {
    background-color: var(--color-primary);
    color: var(--color-white);
    border: none;
    padding: 12px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 20px;
    transition: opacity ease-in-out 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 10px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const RecomendationWrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 40px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 100%;
    max-width: 280px;
    padding: 10px;
    border: 1px solid var(--color-separator);
    border-radius: 4px;
    transition: transform ease-in-out 0.3s;

    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      transform: translateY(-4px);
    }

    img {
      width: 100%;
      max-width: 200px;
      margin-bottom: 10px;
    }

    span {
      margin-bottom: 12px;
    }

    button {
      background-color: var(--color-primary);
      color: var(--color-white);
      border: none;
      padding: 6px 12px;
      border-radius: 4px;
      font-weight: 500;
      transition: opacity ease-in-out 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
