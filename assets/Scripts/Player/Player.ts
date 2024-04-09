import { _decorator, CCFloat, CCInteger, Component, Node, Sprite, Vec3 } from 'cc';
import { InputManager } from '../InputSystem/InputManager';
import { IInputManager } from '../InputSystem/IInputManager';
import { Directions } from './Direction/EDirections';
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
        this.MovePlayr(movementX, movementY);
        if(movementX < -0.1){
            this.FlipPlayer(Directions.Left);
        } else if (movementX > 0.1){
            this.FlipPlayer(Directions.Right);
        }
    }

    private MovePlayr(movementX: number, movementY: number): void{
        this._player.setWorldPosition(this._player.getWorldPosition().add3f(movementX, movementY, 0));
    }

    private FlipPlayer(direction: Directions): void{
        let playerScale: Vec3 = this._player.getScale();
        switch(direction){
            case Directions.Right:
                this._player.setScale(1, playerScale.y, playerScale.z);
                break;
            case Directions.Left:
                this._player.setScale(-1, playerScale.y, playerScale.z);
                break;
        }
    }
}


