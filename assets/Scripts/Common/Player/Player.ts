import { _decorator, CCFloat, CCInteger, Component, Node, Sprite, Vec3 } from 'cc';
import { InputManager } from '../InputSystem/InputManager';
import { IInputManager } from '../InputSystem/IInputManager';
import { FlipObject } from '../../Tools/FlipObject/FlipObject';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    
    @property({visible: true, type: Node}) private _inputManager: InputManager;
    @property({visible: true, type: CCFloat}) private _speed: number;
    @property({visible: true, type: CCInteger}) private _hp: number;
    @property({visible: true, type: CCInteger}) private _maxhp: number;

    private _iInputManager: IInputManager;
    private _player: Node;

    protected onLoad(): void {
        this._iInputManager = this._inputManager.getComponent(InputManager);
        this._player = this.node;
    }

    protected update(deltaTime: number) {
        let movementX = this._iInputManager.movementVector.x * this._speed * deltaTime;
        let movementY = this._iInputManager.movementVector.y * this._speed * deltaTime;
        this._MovePlayr(movementX, movementY);
        FlipObject.FlipX(this._player, movementX);
    }

    private _MovePlayr(movementX: number, movementY: number): void{
        this._player.setWorldPosition(this._player.getWorldPosition().add3f(movementX, movementY, 0));
    }
}

