import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Timer')
export class Timer extends Component {
    // I may to put this class into the Tool folder

    private _time: number = 0;
    private _timerUpdateTime: number = 1;

    public StartTimer(seconds: number, callback: () => void): void{
        seconds += this._time;
        this.schedule(() => {
            this._time += 1;
            if(this._time >= seconds){
                this.StopTimer();
                callback();
            }
        }, this._timerUpdateTime)
    }

    public StopTimer(): void{
        this.unscheduleAllCallbacks();
    }

    public Clear(): void{
        this.StopTimer();
        this._time = 0;
    }

    public get time(): number{
        return this._time;
    }
}