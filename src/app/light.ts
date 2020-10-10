
export class Light {
    private _state:boolean=false//light is off by default
    constructor(private _ip:string ,private _name:string,  _state?:boolean){}
    get ip(){return this._ip}
    get name(){return this._name}
    set name(value){ this._name=value;}
    get state(){return this._state}
    set state(value){ this._state=value;}
    

}
