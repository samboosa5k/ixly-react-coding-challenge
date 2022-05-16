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
  padding-top: 2em;
  align-items: center;
  justify-content: center;
`;

const ModalImage = styled.img`
  position: relative;
  display: flex;
  aspect-ratio: auto;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  box-sizing: content-box;
`;

type ModalContentProps = ImageProps & {
  onClose: () => void;
};

const ModalContent = (props: ModalContentProps) => {
  const { src, id, alt, onClose } = props;
  return (
    <Backdrop>
      <Container>
        <Container>
          <ModalImage id={id} src={src} alt={alt} />
        </Container>
        <CloseText onClick={onClose}>Close</CloseText>
      </Container>
    </Backdrop>
  );
};

export { ModalContent };
