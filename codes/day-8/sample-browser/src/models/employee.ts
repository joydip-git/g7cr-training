export class Employee {
   
    constructor(private _name: string, private _id: number, private _basicPay: number, private _daPay: number, private _hraPay: number) {

    }

    public get hraPay(): number {
        return this._hraPay;
    }
    public set hraPay(value: number) {
        this._hraPay = value;
    }
    public get daPay(): number {
        return this._daPay;
    }
    public set daPay(value: number) {
        this._daPay = value;
    }
    public get basicPay(): number {
        return this._basicPay;
    }
    public set basicPay(value: number) {
        this._basicPay = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    
    calculateSalary() {
        return this._basicPay + this._daPay + this._hraPay;
    }
}