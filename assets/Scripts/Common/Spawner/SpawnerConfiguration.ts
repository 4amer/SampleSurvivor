import { _decorator, CCClass, CCFloat, CCInteger, Component, Node } from 'cc';
import { WaveInfo } from './WaveInfo';
import { EnemyAndDelay } from './EnemyAndDelay';
const { ccclass, property, menu } = _decorator;

@ccclass('SpawnerConfiguration')
@menu('Spawner/Configuration')
export class SpawnerConfiguration extends Component {
    //idk why it shows only one class in the inspector or nothing. 
    @property({visible: true, type: [WaveInfo]}) private _waveInfo: WaveInfo[] = [];

    public get waveInfos(): WaveInfo[]{
        return this._waveInfo;
    }
}