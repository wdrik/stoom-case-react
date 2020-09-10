import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;

export const RecomendationWrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 40px auto 20px;

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
    }
  }
`;
