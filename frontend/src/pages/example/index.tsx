import ColoredButton from '@/components/button/ColoredButton/index.tsx';
import ColoredIconButton from '@/components/button/ColoredIconButton/index.tsx';
// import Game from '@/components/Game.tsx';

import InputTextBox from '@/components/InputTextBox/index.tsx';
import ColoredTextBox from '@/components/textbox/ColoredTextBox/index.tsx';
import LabeledTextBox from '@/components/textbox/LabeledTextBox/index.tsx';
import type {
  coloredTextBoxProps,
  labeledtextboxProps,
} from '@/components/textbox/types';

import groupIcon from '@/assets/ui/icon/button/icon-button-collection-h50w50.png';
import testIcon from '@/assets/ui/icon/shape/icon-shape-white-big-player0-h48w48.png';

const Example = () => {
  const labeledTextExampleProps: labeledtextboxProps = {
    labelColor: 'white',
    titleText: '닉네임입니다아마두요',
    labelText: '칭호입니다. 아마도요',
  };
  const coloredTextBoxProps: coloredTextBoxProps = {
    color: 'red',
    text: 'READY',
  };
  const coloredTextBoxProps2: coloredTextBoxProps = {
    color: 'blue',
    text: 'READY',
    icon: testIcon,
  };
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
      <ColoredTextBox props={coloredTextBoxProps} />
      <ColoredTextBox props={coloredTextBoxProps2} />
      {/* <Game /> */}
      <div>
        <LabeledTextBox props={labeledTextExampleProps} />
      </div>
    </div>
  );
};

export default Example;
