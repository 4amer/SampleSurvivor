import { _decorator, CCFloat, Component, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyAndDelay')
export class EnemyAndDelay{
    @property({visible: true, type: Prefab}) private _enemy: Prefab = null;
    @property({visible: true, type: CCFloat}) private _spawnDelay: number = 0.1;

    public get enemy(): Prefab{
        return this._enemy;
    }

    public get delay(): number{
        return this._spawnDelay;
    }
}