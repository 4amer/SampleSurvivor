import { _decorator, Component, Node, ProgressBarComponent } from 'cc';
import { Timer } from '../Timer/Timer';
const { ccclass, property } = _decorator;

@ccclass('Spawner')
export class Spawner extends Component {

    @property({visible: true, type: Node}) private _timer: Timer;
    @property({visible: true, type: Node}) private _spawnParent: Node;

    private _
    private _timerScript: Timer;
    private _currentWave: number = 0;

    protected start(): void {
        this._timerScript = this._timer.getComponent(Timer);

        this._timerScript.StartTimer(0, this._NewEnemyWave);
    }

    private _NewEnemyWave(): void{
        console.log("New enemy wave!");
        //this._currentWave += 1;

    }
}


