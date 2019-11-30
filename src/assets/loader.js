import snake from './images/snake.png';
import bomberFront from './images/Bomberman/Front/*.png';
import bomberBack from './images/Bomberman/Back/*.png';
import bomberRight from './images/Bomberman/Right/*.png';
import bomberLeft from './images/Bomberman/Left/*.png';
import xmasBackground from './images/xmas/background.png';

export const background = xmasBackground;
export const bomberFrames = {
    front: Object.values(bomberFront),
    back: Object.values(bomberBack),
    right: Object.values(bomberRight),
    left: Object.values(bomberLeft),
};
