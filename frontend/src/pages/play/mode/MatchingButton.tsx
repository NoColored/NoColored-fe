import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';
import ColoredIconButton from '@/components/button/ColoredIconButton';
import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';

import useModal from '@/hooks/useModal';
import { useWebSocket } from '@/hooks/useWebSocket';

import * as constants from '@/pages/play/mode/constants';
import { MatchingText } from '@/pages/play/mode/MatchingText';

import { deleteMatching, getMatching } from '@/services/matching';

import { ROUTE } from '@/router/constants';

interface Props {
  imgSrc: string;
}

const MatchingButton = ({ imgSrc }: Props) => {
  const navigate = useNavigate();
  const { Modal, openModal, closeModal, isOpen } = useModal();

  useWebSocket((message) => {
    if (message.action === 'matching') {
      navigate(ROUTE.game);
      return;
    }
    if (message.action === 'matchingCancel') {
      closeModal();
    }
  });

  const startMatching = async () => {
    const matchingSuccess = await getMatching();
    if (matchingSuccess) {
      openModal();
    } else {
      navigate(`${ROUTE.error}/500`);
    }
  };

  return (
    <>
      <ColoredIconButton
        icon={constants.RANKING.icon}
        size='xlarge'
        text={constants.RANKING.label}
        color={constants.RANKING.color}
        onClick={startMatching}
      />

      <Modal>
        <div className={styles.matchingModalWrapper}>
          <MatchingText isModalOpen={isOpen} />
          <div className={styles.matchingImageWrapper}>
            <RoundCornerImageBox
              size='large'
              imgSrc={imgSrc}
              borderColor='black'
              borderSize='5x'
            />
          </div>
          <ColoredButton
            size='small'
            text='취소'
            color='navy'
            onClick={() => {
              deleteMatching();
              closeModal();
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default MatchingButton;
