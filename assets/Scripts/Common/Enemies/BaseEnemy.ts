import { _decorator, CCFloat, CCInteger, Component, find, Node, Vec3 } from 'cc';
import { FlipObject } from '../../Tools/FlipObject/FlipObject';
const { ccclass, property } = _decorator;

@ccclass('BaseEnemy')
export class BaseEnemy extends Component {
    @property({visible: true, type: CCInteger}) private _hp: number;
    @property({visible: true, type: CCFloat}) private _speed: number;
    @property({visible: true, type: CCFloat}) private _invulnerabilityTime: number;
    @property({visible: true, type: CCInteger}) private _damage: number;
    @property({visible: true, type: CCFloat}) private _timeToInpact: number;

    private _playerNode: Node;

    protected update(dt: number): void {
        this._playerNode = this._GetPlayerNode();
        this.MoveTo(this._playerNode.getPosition());
        this._FlipEnemy();
    }

    protected EnemyBehavior(): void{

    }

    private _FlipEnemy(): void{
        let horizontalMove: number = this._playerNode.position.x - this.node.position.x;
        FlipObject.FlipXByMove(this.node, horizontalMove);
    }

    private MoveTo(position: Vec3): void{
        var moveAction = this.MoveTo(position);
    }

    public TakeDamage(damage: number): void{
        this._hp -= damage;
        if(this._hp <= 0) this.Die;
    }

    public Die(): void{
        this.destroy();
    }

    private _GetPlayerNode(): Node{
        //Later i may get player node by spawner or someth
        const playerNode = find("Player");
        if(!playerNode){
            console.warn("Player is not found!");
            return;
        }
        return playerNode;
    }
}