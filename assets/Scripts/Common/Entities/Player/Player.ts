import { _decorator, CCFloat, CCInteger, Component, Node, Sprite, Vec3 } from 'cc';
import { InputManager } from '../../InputSystem/InputManager';
import { IInputManager } from '../../InputSystem/IInputManager';
import { FlipObject } from '../../../Utils/FlipObject/FlipObject';
import { Entity } from '../Entity';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Entity {
    
    @property({visible: true, type: Node}) private _inputManager: InputManager = null;
    @property({visible: true, type: CCFloat}) private _speed: number = 0;
    @property({visible: true, type: CCInteger}) private _hp: number = 0;
    @property({visible: true, type: CCInteger}) private _maxhp: number = 0;

    private _iInputManager: IInputManager;

    protected onLoad(): void {
        this._iInputManager = this._inputManager.getComponent(InputManager);
    }

    protected EntityBehavior(dt: number): void {
        let movementX: number = this._iInputManager.movementVector.x * this._speed * dt;
        let movementY: number = this._iInputManager.movementVector.y * this._speed * dt;
        this.movementXDirection = movementX;
        this._MovePlayr(movementX, movementY);
    }

    private _MovePlayr(movementX: number, movementY: number): void{
        this.node.setWorldPosition(this.node.getWorldPosition().add3f(movementX, movementY, 0));
    }
}


