import { _decorator, Component, Node } from 'cc';
import { BaseEnemy } from '../BaseEnemy';
const { ccclass, property } = _decorator;

@ccclass('AbstractSimpleEnemy')
export abstract class AbstractSimpleEnemy extends BaseEnemy {
    protected update(dt: number): void {
        super.update(dt);
        this.EntityBehavior(dt);
    }

    protected EntityBehavior(dt: number): void {
        super.EntityBehavior(dt);
        var player = this.GetPlayerNode();
        if(player){
            this.Movemenet(player.getWorldPosition(), dt)
        }
    }
}


