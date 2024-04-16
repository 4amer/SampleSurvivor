import { _decorator, CCInteger, Component, Node } from 'cc';
import { EnemyAndDelay } from './EnemyAndDelay';
const { ccclass, property } = _decorator;

@ccclass('WaveInfo')
export class WaveInfo{
    @property({visible: true, type: [EnemyAndDelay]}) private _enemies: EnemyAndDelay[] = [];
    @property({visible: true, type: CCInteger}) private _timeToNextWave: number = 30;

    public get enemies(): EnemyAndDelay[]{
        return this._enemies;
    } 

    public get timeToNextWave(): number{
        return this._timeToNextWave;
    }
}


