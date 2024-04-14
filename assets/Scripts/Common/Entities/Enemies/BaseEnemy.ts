import { _decorator, CCFloat, CCInteger, Component, find, Node, Vec2, Vec3 } from 'cc';
import { FlipObject } from '../../../Utils/FlipObject/FlipObject';
import { Entity } from '../Entity';
const { ccclass, property } = _decorator;

@ccclass('BaseEnemy')
export abstract class BaseEnemy extends Entity {
    @property({visible: true, type: CCInteger}) private _hp: number = 0;
    @property({visible: true, type: CCFloat}) private _speed: number = 0;
    @property({visible: true, type: CCFloat}) private _invulnerabilityTime: number = 0;
    @property({visible: true, type: CCInteger}) private _damage: number = 0;
    @property({visible: true, type: CCFloat}) private _timeToInpact: number = 0;

    private _playerNode: Node;

    protected start(): void {
        this._playerNode = this.GetPlayerNode();
    }

    protected EntityBehavior(dt: number): void {
        this.movementXDirection = (this._playerNode.position.x - this.node.position.x) * (-1);
        console.log(this.movementXDirection);
    }

    public TakeDamage(damage: number): void{
        this._hp -= damage;
        if(this._hp <= 0) this.Die;
    }

    public Die(): void{
        this.destroy();
    }

    protected GetPlayerNode(): Node{
        //Later i may get player node by spawner or someth
        const playerNode = find("Canvas/Player");
        if(!playerNode){
            console.warn("Player is not found!");
            return;
        }
        return playerNode;
    }

    protected Movemenet(target: Vec3, dt: number): void{
        let move: Vec3 = new Vec3(0,0,0);
        Vec3.moveTowards(move, this.node.worldPosition, target, this._speed);
        this.node.setWorldPosition(move);
    }
}