import { _decorator, Component, EAxisDirection, Node, Script, Vec2, Vec3 } from 'cc';
import { AbstractInput } from './AbstractInput';
import { KeyBoardInput } from './KeyBoardInput';
import { IInputManager } from './IInputManager';

const { ccclass, property } = _decorator;

@ccclass('InputManager')
export class InputManager extends Component implements IInputManager {

    @property({visible: true, type: Node}) private _keyBoardInput: KeyBoardInput;
    private _abstractInput;

    protected onLoad(): void {
        this._abstractInput = this._keyBoardInput.getComponent(KeyBoardInput);
    }

    public get movementVector(): Vec3 {
        return this._abstractInput.movementVector;
    }
}