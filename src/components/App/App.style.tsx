import styled from 'styled-components';

export const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1em;

  @media (min-width: 720px) {
    max-width: 1024px;
  }

  @media (min-width: 960px) {
    max-width: 1280px;
    margin: 0 auto;
  }
`;
