import { SpinnerRoundOutlined } from 'spinners-react';

export const Loader = () => {
  return (
    <SpinnerRoundOutlined
      size={90}
      thickness={180}
      speed={100}
      color="rgba(56, 205, 62, 1)"
    />
  );
};
