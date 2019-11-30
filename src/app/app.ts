import { background, bomberFrames } from '../assets/loader';
import * as PIXI from 'pixi.js';

interface BomberFrames {
    front: string[];
    back: string[];
    right: string[];
    left:  string[];
}

// Prepare frames
const playerFrames: BomberFrames = bomberFrames;

// IMPORTANT: Change this value in order to see the Hot Module Reloading!
const currentFrame: keyof BomberFrames = 'front';


export class GameApp {

    private app: PIXI.Application;

    constructor(parent: HTMLElement, width: number, height: number) {

        this.app = new PIXI.Application({width, height, backgroundColor : 0x000000});
        parent.replaceChild(this.app.view, parent.lastElementChild); // Hack for parcel HMR

        // init Pixi loader
        const loader = new PIXI.Loader();

        // Add user player assets
        console.log('Player to load', playerFrames);
        Object.keys(playerFrames).forEach(key => {
            loader.add(playerFrames[key]);
        });
        
        const bg = PIXI.Sprite.from(background);
        bg.width = width;
        bg.height = height;
        this.app.stage.addChild(bg);
        // Load assets
        loader.load((loader, resources) => {
            const playerIdle: PIXI.AnimatedSprite = new PIXI.AnimatedSprite(playerFrames[currentFrame].map(path => PIXI.Texture.from(path)));
            playerIdle.x = 100;
            playerIdle.y = 150;
            playerIdle['vx'] = 1;
            playerIdle.anchor.set(0, 1);
            // playerIdle.anchor.set(0.5);
            playerIdle.animationSpeed = 0.3;
            playerIdle.play();
            this.app.stage.addChild(playerIdle);
        });
    }

}
