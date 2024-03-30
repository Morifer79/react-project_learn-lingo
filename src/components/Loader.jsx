import { SpinnerRoundOutlined } from 'spinners-react';
import styled from 'styled-components';

const LoaderBox = styled.div`
  inline-size: 100vw;
  block-size: 100vh;
  position: absolute;
  top: 45%;
  left: 45%;
`;

export const Loader = () => {
  return (
    <LoaderBox>
      <SpinnerRoundOutlined
        size={90}
        thickness={180}
        speed={100}
        color="rgba(56, 205, 62, 1)"
      />
    </LoaderBox>
  );
};
