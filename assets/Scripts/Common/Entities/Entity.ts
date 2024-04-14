import { _decorator, Component, Node } from 'cc';
import { FlipObject } from '../../Utils/FlipObject/FlipObject';
const { ccclass, property } = _decorator;

@ccclass('Entity')
export class Entity extends Component {

    private _movementXDirection: number = 0;

    protected update(dt: number): void {
        this.EntityBehavior(dt);
        this._EntityFlip();
    }

    protected EntityBehavior(dt: number): void{

    }

    private _EntityFlip(){
        FlipObject.FlipXByMovement(this.node, this.movementXDirection);
    }

    public get movementXDirection(): number{
        return this._movementXDirection;
    }

    public set movementXDirection(movementX: number){
        this._movementXDirection = movementX;
    }
}


