import _snake from './images/snake.png';
import bomberFront from './images/Bomberman/Front/*.png';
import bomberBack from './images/Bomberman/Back/*.png';
import bomberRight from './images/Bomberman/Right/*.png';
import bomberLeft from './images/Bomberman/Left/*.png';
import _background from './images/xmas/background.png';
import _icetree from './images/xmas/icetree.png';

export const snake = _snake;
export const bomberFrames = {
    front: Object.values(bomberFront),
    back: Object.values(bomberBack),
    right: Object.values(bomberRight),
    left: Object.values(bomberLeft),
};
export const background = _background;
export const icetree = _icetree;
