import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

export const positionVariants = {
  leftTop: {
    top: 0,
    left: 0,
    borderBottom: '1px solid black',
    borderRight: '1px solid black',
    borderTopLeftRadius: vars.borderRadius['2x'],
  },
  rightTop: {
    top: 0,
    right: 0,
    borderBottom: '1px solid black',
    borderLeft: '1px solid black',
    borderTopRightRadius: vars.borderRadius['2x'],
  },
};

export const button = recipe({
  base: style([
    sprinkles({
      backgroundColor: 'white',
      fontSize: '0.75x',
      paddingX: '2x',
      paddingY: '1x',
    }),
    {
      position: 'absolute',

      ':hover': {
        backgroundColor: vars.colors.gray100,
      },

      ':active': {
        backgroundColor: vars.colors.gray200,
      },
    },
  ]),
  variants: {
    position: positionVariants,
  },
});
