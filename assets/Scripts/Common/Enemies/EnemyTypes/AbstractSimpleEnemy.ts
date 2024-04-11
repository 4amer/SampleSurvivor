import { _decorator, Component, Node } from 'cc';
import { BaseEnemy } from '../BaseEnemy';
const { ccclass, property } = _decorator;

@ccclass('AbstractSimpleEnemy')
export abstract class AbstractSimpleEnemy extends BaseEnemy {
    protected update(dt: number): void {
        super.update(dt);
        this.EnemyBehavior(dt);
    }

    protected EnemyBehavior(dt: number): void {
        var player = this.GetPlayerNode();
        if(player){
            this.Movemenet(player.getWorldPosition(), dt)
        }
    }
}


