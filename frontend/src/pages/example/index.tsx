import ColoredButton from '@/components/button/ColoredButton/index.tsx';
import ColoredIconButton from '@/components/button/ColoredIconButton/index.tsx';
// import Game from '@/components/Game.tsx';

import InputTextBox from '@/components/InputTextBox/index.tsx';
import ColoredTextBox from '@/components/textbox/ColoredTextBox/index.tsx';
import LabeledTextBox from '@/components/textbox/LabeledTextBox/index.tsx';

import groupIcon from '@/assets/ui/icon/button/icon-button-collection-h50w50.png';
import testIcon from '@/assets/ui/icon/shape/icon-shape-white-big-player0-h48w48.png';

const Example = () => {
  return (
    <div>
      <div>테스트버튼</div>
      <ColoredButton color='red' size='small' text='Ready' onClick={() => {}} />
      <div>테스트버튼</div>
      <ColoredButton
        color='navy'
        size='medium'
        text='Ready'
        onClick={() => {}}
      />
      <div>테스트버튼</div>
      <ColoredButton
        color='gray300'
        size='large'
        text='Ready'
        onClick={() => {}}
      />
      <ColoredIconButton
        color='red'
        icon={testIcon}
        size='large'
        text='READY'
        onClick={() => {}}
      />
      <div>테스트버튼</div>
      <ColoredIconButton
        color='pink'
        icon={testIcon}
        size='medium'
        text='미디엄임'
        onClick={() => {}}
      />
      <div>테스트버튼</div>
      <ColoredIconButton
        color='navy'
        icon={groupIcon}
        size='xlarge'
        text='엑스라지임'
        onClick={() => {}}
      />
      <InputTextBox
        placeholder='전부 모달 창에 사용'
        size='small'
        onChange={(e) => console.log(e.target.value)}
      />
      <InputTextBox
        placeholder='회원가입 모달 창에 사용'
        size='medium'
        onChange={(e) => console.log(e.target.value)}
      />
      <InputTextBox
        placeholder='Login, PW 사용'
        size='large'
        onChange={(e) => console.log(e.target.value)}
      />
      <div>텍스트 컴포넌트</div>
      <ColoredTextBox text='text' color='red' icon={testIcon} />
      {/* <Game /> */}
      <div>
        <LabeledTextBox
          labelText='라벨이에용'
          titleText='타이틀이에용닉네임들어가죠'
          labelColor='white'
        />
      </div>
    </div>
  );
};

export default Example;
