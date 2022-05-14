import styled from 'styled-components';
const ResponsiveGrid = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  gap: 0.5em;

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const Container = styled.div`
  position: relative;
  display: block;
  margin: 0;
  padding: 0.5em;
  width: 100%;
  height: 100%;
`;

export const StyledGrid = styled(({ children }: IChildProps) => {
  return (
    <Container id="grid-container">
      <ResponsiveGrid>{children}</ResponsiveGrid>
    </Container>
  );
})``;
