import { _decorator, CCClass, CCFloat, CCInteger, Component, Node } from 'cc';
import { WaveInfo } from './WaveInfo';
import { EnemyAndDelay } from './EnemyAndDelay';
const { ccclass, property, menu } = _decorator;

@ccclass('SpawnerInstruction')
@menu('Spawner/Instruction')
export class SpawnerInstruction extends Component {
    @property({visible: true, type: [WaveInfo]}) private _waveInfos: WaveInfo[] = [];

    public get waveInfos(): WaveInfo[]{
        return this._waveInfos;
    }
}