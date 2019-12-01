import { snake, bomberFrames, background, icetree } from '../assets/loader';
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
        const loader = PIXI.Loader.shared;

        // Add user player assets
        Object.keys(playerFrames).forEach(key => {
            loader.add(playerFrames[key]);
        });
        
        loader.add(background);
        loader.add(icetree);

        let self = this;

        loader.add({url:'./icetree.json',crossOrigin:true}).load(function(){
            let bg = PIXI.Sprite.from(background);
            bg.width = width;
            bg.height = height;
            self.app.stage.addChild(bg);

            let playerIdle: PIXI.AnimatedSprite = new PIXI.AnimatedSprite(playerFrames[currentFrame].map(path => PIXI.Texture.from(path)));
            playerIdle.x = 100;
            playerIdle['vx'] = 1;
            playerIdle.anchor.set(0, 1);
            // playerIdle.anchor.set(0.5);
            playerIdle.animationSpeed = 0.3;
            self.app.stage.addChild(playerIdle);

            console.log(loader.resources['./icetree.json'])
            let sheet = loader.resources['./icetree.json'].spritesheet;
            const it: PIXI.AnimatedSprite = new PIXI.AnimatedSprite(sheet.textures[icetree](t => PIXI.Texture.from(t)));
            self.app.stage.addChild(it);
            //let sheet = PIXI.Loader.shared.resources["xmas/icetree.json"].spritesheet;
            //sheet.textures.forEach(key => {
            //    loader.add(sheet.textures[key]);
            //});
            // Load assets  
        });
    
    }
}
