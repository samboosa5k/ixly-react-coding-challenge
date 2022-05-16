import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
  overflow: hidden;
`;

const CloseText = styled.span`
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  position: relative;
  top: 1em;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  padding: 0.5em;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  background-color: transparent;
  overflow: hidden;
  max-width: 80%;
  max-height: 80%;
  padding: 1em;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled(Container)`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%);
  box-sizing: content-box;
  border-radius: 0.5em;
`;

const ModalImage = styled.img`
  position: relative;
  display: flex;
  aspect-ratio: auto;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  box-sizing: content-box;
  border-radius: 0.5em;
`;

type ModalContentProps = ImageProps & {
  onClose: () => void;
};

// This is the wrapper for the modal content made of all the styled components above
const ModalContent = (props: ModalContentProps) => {
  const { src, id, alt, onClose } = props;
  return (
    <Backdrop>
      <Container>
        <InnerContainer>
          <ModalImage id={id} src={src} alt={alt} />
        </InnerContainer>
        <CloseText onClick={onClose}>Close</CloseText>
      </Container>
    </Backdrop>
  );
};

export { ModalContent };
