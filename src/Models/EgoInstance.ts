import { EgoBase } from "./EgoBase";

export class EgoInstance {
    public readonly BaseData: EgoBase;
    public Threadspin: number = 4;

    constructor(baseData: EgoBase){
        this.BaseData = baseData;
    }
}