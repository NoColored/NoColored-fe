import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from '../constants';

import { borderLightOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

const imageBoxBase = style([
  sprinkles({
    borderRadius: '2x',
    position: 'relative',
  }),
  {
    overflow: 'hidden',
    aspectRatio: '1 / 1',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'border-box',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxSizing: 'border-box',
  },
]);

const sizeVariants: {
  [size in (typeof constants.IMAGEBOX_SIZE)[number]]?: ReturnType<typeof style>;
} = {};

constants.IMAGEBOX_SIZE.forEach((size) => {
  sizeVariants[size] = style([
    {
      height: constants.IMAGEBOX_SIZE_PIXEL[size],
    },
  ]);
});

const backgroundColorVariants: {
  [color in (typeof constants.BACKGROUND_COLOR)[number]]?: ReturnType<
    typeof style
  >;
} = {};

constants.BACKGROUND_COLOR.forEach((color) => {
  backgroundColorVariants[color] = style([
    sprinkles({
      backgroundColor: color,
    }),
  ]);
});

const borderColorVariants: {
  [color in (typeof constants.BORDER_COLOR)[number]]?: ReturnType<typeof style>;
} = {};

constants.BORDER_COLOR.forEach((color) => {
  borderColorVariants[color] = style([borderLightOptions({ color })]);
});

const borderSizeVariants: {
  [size in (typeof constants.BORDER_WEIGHT)[number]]?: ReturnType<typeof style>;
} = {};

constants.BORDER_WEIGHT.forEach((size) => {
  borderSizeVariants[size] = style([borderLightOptions({ width: size })]);
});

export const roundCornerImageBox = recipe({
  base: imageBoxBase,
  variants: {
    size: sizeVariants,
    borderSize: borderSizeVariants,
    borderColor: borderColorVariants,
    backgroundColor: backgroundColorVariants,
  },
});
