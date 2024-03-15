import { useNavigate } from 'react-router-dom';

import * as styles from './index.css.ts';

import ColoredButton from '@/components/button/ColoredButton/index.tsx';

const Landing = () => {
  const navigate = useNavigate();

  const clickLogIn = () => {
    navigate('/login');
  };

  const landingLogo: string =
    '/public/images/landing-logo-whiteborder-h800w1280.png';
  return (
    <div className={styles.contentWrapper}>
      <img
        className={styles.logoImage}
        src={landingLogo}
        alt='NoColored Logo'
      />
      <div className={styles.buttonWrapper}>
        <ColoredButton
          text='GUEST'
          color='gray300'
          size='large'
          onClick={() => {}}
        />
        <ColoredButton
          text='LOG IN'
          color='pink'
          size='large'
          onClick={clickLogIn}
        />
      </div>
    </div>
  );
};

export default Landing;
