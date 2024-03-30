import { useLoaderData, useNavigate } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import type { GameResult } from '@/types/result';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import ColoredButton from '@/components/button/ColoredButton';

import useModal from '@/hooks/useModal';

import ResultInfoBox from '@/pages/result/ResultInfoBox';
import { RewardsModal } from '@/pages/result/RewardsModal';

const Result = () => {
  const gameResult = useLoaderData() as GameResult;

  const { Modal, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const handleClickExit = () => {
    if (gameResult.reward?.tier || gameResult.reward?.skin) {
      openModal();
    } else {
      navigate('/home');
    }
  };

  // const handleClickMore = () => {};

  return (
    <BasicContentFrame>
      <div className={styles.gameResultWrapper}>
        <div className={styles.resultTextWrapper}>{constants.RESULTTEXT}</div>

        {gameResult.players.map((item) => (
          <div key={`${item.nickname}${item.rank}`}>
            <ResultInfoBox
              rank={item.rank}
              imgSrc={item.skin}
              label={item.label}
              nickname={item.nickname}
              colorStyle={constants.COLOR_STYLES[item.index]}
              gameScore={item.step}
              firstResult={item.rank === 1}
            />
          </div>
        ))}
        <div className={styles.buttonWrapper}>
          <ColoredButton
            text='나가기'
            color='gray300'
            size='small'
            onClick={handleClickExit}
          />
          <ColoredButton
            text='더하기'
            color='navy'
            size='small'
            onClick={() => {}}
          />
        </div>
      </div>

      <Modal>
        <RewardsModal
          tier={gameResult.reward.tier}
          skin={gameResult.reward.skin}
          closeModal={closeModal}
        />
      </Modal>
    </BasicContentFrame>
  );
};

export default Result;
