import { _decorator, Component, Node, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AbstractInput')
export abstract class AbstractInput extends Component {
    public abstract get movementVector(): Vec3;
}


