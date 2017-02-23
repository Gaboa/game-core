import Sprite from '../sprite/sprite';

export default class Button extends Sprite {
    constructor({
        texture,
        hoverTexture,
        x = 0,
        y = 0,
        container = game.stage,
        anchor = 0.5,
        onClick
    }) {
        super({ texture, x, y, container, anchor });

        this.normalTexture = texture;
        this.hoverTexture = hoverTexture;
        this.onClick = onClick;

        this.isDown = false;
        this.isUp = true;
        this.isOver = false;
    }
    handlers() {
        this.interactive = true;
        this.buttonMode = true;

        this.on('pointerover', () => {
            this.isOver = true;
        });
        this.on('pointerout', () => {
            this.isOver = false;
        });
        this.on('pointerup', () => {
            if (typeof this.onClick === 'function') {
                this.onClick();
            }
        });

    }
    update() {
        if (this.isOver) {
            if (this.texture !== this.hoverTexture) {
                this.texture = this.hoverTexture;
            }
        } else {
            if (this.texture !== this.normalTexture) {
                this.texture = this.normalTexture;
            }
        }
    }
}