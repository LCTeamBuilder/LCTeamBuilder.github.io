import { IdentityBase } from "./IdentityBase";

export class IdentityInstance {
    public readonly BaseData: IdentityBase;
    public Level: number = 45;
    public Uptie: number = 4;

    constructor(baseData: IdentityBase) {
        this.BaseData = baseData;
    }
}