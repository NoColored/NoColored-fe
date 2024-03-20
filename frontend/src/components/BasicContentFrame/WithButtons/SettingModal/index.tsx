import ColoredButton from '@/components/button/ColoredButton';

interface Props {
  onClose: () => void;
}

const Settings = ({ onClose }: Props) => {
  return (
    <div>
      <h2> Hello World</h2>
      <ColoredButton text='닫기' color='green' size='small' onClick={onClose} />
    </div>
  );
};

export default Settings;
