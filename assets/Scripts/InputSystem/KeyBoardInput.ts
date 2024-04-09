import { _decorator, clamp01, Component, EventKeyboard, Input, input, KeyCode, Node, Vec2, Vec3 } from 'cc';
import { AbstractInput } from './AbstractInput';
const { ccclass, property } = _decorator;

@ccclass('KeyBoardInput')
export class KeyBoardInput extends AbstractInput {

    private _movement: Vec3 = new Vec3(0,0,0);

    protected start(): void {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    protected onDestroy(): void {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    private onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
            case KeyCode.ARROW_LEFT:
                this._movement.x = -1;
                break;
            case KeyCode.KEY_D:
            case KeyCode.ARROW_RIGHT:
                this._movement.x = 1;
                break;
            case KeyCode.KEY_W:
            case KeyCode.ARROW_UP:
                this._movement.y = 1;
                break;
            case KeyCode.KEY_S:
            case KeyCode.ARROW_DOWN:
                this._movement.y = -1;
                break;
        }
    }

    private onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
            case KeyCode.ARROW_LEFT:
            case KeyCode.KEY_D:
            case KeyCode.ARROW_RIGHT:
                this._movement.x = 0;
                break;
            case KeyCode.KEY_W:
            case KeyCode.ARROW_UP:
            case KeyCode.KEY_S:
            case KeyCode.ARROW_DOWN:
                this._movement.y = 0;
                break;
        }
    }

    public get movementVector(): Vec3{
        return this._movement;
    } 
}


