import { _decorator, Component, Node, Vec3 } from 'cc';
import { Directions } from './Direction/EDirections';
const { ccclass, property } = _decorator;

@ccclass('FlipObject')
export abstract class FlipObject{
    public static FlipX(node: Node, direction: Directions){
        let nodeScale: Vec3 = node.getScale();
        switch(direction){
            case Directions.Right:
                node.setScale(1, nodeScale.y, nodeScale.z);
                break;
            case Directions.Left:
                node.setScale(-1, nodeScale.y, nodeScale.z);
                break;
        }
    }
    public static FlipXByMove(node: Node, movementX:number){
        if(movementX < -0.1){
            this.FlipX(node, Directions.Left);
        } else if(movementX > 0.1){
            this.FlipX(node, Directions.Right);
        }
    }
}