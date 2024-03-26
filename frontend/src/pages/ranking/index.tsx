import { useState } from 'react';

import * as styles from './index.css';

import { RankInfo } from '@/types/rank';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons/index';

// props는 임시로 임포트
import RankingItemBox, {
  RankingItemBoxProps,
} from '@/pages/ranking/RankingItemBox';

import { getUser } from '@/services/auth';

// 받아와서 map으로 돌려줘야됨
const rankingExample: RankingItemBoxProps[] = [
  {
    rank: 1,
    imgSrc:
      '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    score: 9999,
  },
  {
    rank: 2,
    imgSrc:
      '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    score: 9999,
  },
  {
    rank: 3,
    imgSrc:
      '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    score: 9999,
  },
  {
    rank: 4,
    imgSrc:
      '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    score: 9999,
  },
  {
    rank: 5,
    imgSrc:
      '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    score: 9999,
  },
  {
    rank: 650,
    imgSrc:
      '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    score: 9999,
  },
  {
    rank: 7777,
    imgSrc:
      '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    score: 9999,
  },
  {
    rank: 90,
    imgSrc:
      '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    score: 9999,
  },
];
const [rankList, setRankList] = useState<RankInfo[]>([]);
const myRank = await getUser();

// guest일때는 isguest가 true일때 랭킹이 안보이도록 값에다 설정해주면 될듯 'string'으로 처리됨.

const Ranking = () => {
  return (
    <BasicContentFrame backButtonLabel='뒤로'>
      <div className={styles.rankingFullWrapper}>
        <div className={styles.rankingTitleWrapper}>
          <div className={styles.rankingTitleText}>RANKING</div>
        </div>

        <div className={styles.rankingWrapper}>
          {rankingExample.map((item) => (
            <RankingItemBox
              key={item.rank}
              rank={item.rank}
              imgSrc={item.imgSrc}
              label={item.label}
              nickname={item.nickname}
              tier={item.tier}
              score={item.score}
            />
          ))}
        </div>
        {myRank && (
          <RankingItemBox
            rank={myRank.rank}
            imgSrc={myRank.skin}
            label={myRank.title}
            nickname={myRank.nickname}
            tier={myRank.tier}
            score={myRank.rating}
            myRank
          />
        )}
      </div>
    </BasicContentFrame>
  );
};

export default Ranking;
