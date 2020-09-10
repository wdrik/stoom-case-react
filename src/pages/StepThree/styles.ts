import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;

  span {
    display: block;
    margin-bottom: 20px;
    opacity: 0.7;
  }

  > select {
    width: 100%;
    max-width: 300px;
    border: 1px solid var(--color-separator);
    padding: 8px 6px;
    margin-bottom: 20px;
    font-size: 16px;
    color: var(--color-gray);
  }

  button {
    background-color: var(--color-primary);
    color: var(--color-white);
    border: none;
    padding: 6px 16px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 18px;
    transition: opacity ease-in-out 0.2s;
    max-width: 240px;
    text-decoration: underline;

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
