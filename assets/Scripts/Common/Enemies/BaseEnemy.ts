import { _decorator, CCFloat, CCInteger, Component, find, Node, Vec2, Vec3 } from 'cc';
import { FlipObject } from '../../Tools/FlipObject/FlipObject';
const { ccclass, property } = _decorator;

@ccclass('BaseEnemy')
export abstract class BaseEnemy extends Component {
    @property({visible: true, type: CCInteger}) private _hp: number;
    @property({visible: true, type: CCFloat}) private _speed: number;
    @property({visible: true, type: CCFloat}) private _invulnerabilityTime: number;
    @property({visible: true, type: CCInteger}) private _damage: number;
    @property({visible: true, type: CCFloat}) private _timeToInpact: number;

    private _playerNode: Node;

    protected start(): void {
        this._playerNode = this.GetPlayerNode();
    }

    protected update(dt: number): void {
        this._FlipEnemy();
    }

    protected EnemyBehavior(dt: number);
    protected EnemyBehavior(): void{

    }

    private _FlipEnemy(): void{
        let horizontalMove: number = this._playerNode.position.x - this.node.position.x;
        FlipObject.FlipXByMove(this.node, horizontalMove * (-1));
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