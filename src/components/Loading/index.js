import { useLottie } from 'lottie-react';
import loadingAnimation from '../../assets/Animations/loading.json';

const Loading = () => {
  const options = {
    animationData: loadingAnimation,
    loop: true,
    autoplay: true,
    style: {
      width: '100%',
      height: '150px',
    },
  };

  const { View } = useLottie(options);

  return View;
};

export default Loading;
