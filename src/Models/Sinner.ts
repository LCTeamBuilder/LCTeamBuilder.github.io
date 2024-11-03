import { SinnerEnum } from "../Enums/SinnerEnum";
import { UpdateSinnerIdentityCard } from "../Handlers/UIHandler";
import { EgoBase } from "./EgoBase";
import { IdentityBase } from "./IdentityBase";

export class Sinner {
    public SinnerEnum: SinnerEnum;
    private _equipedIdentity: IdentityBase;
    public EquipedEgos: Array<EgoBase>;
    public AvailableIds?: Array<IdentityBase>;
    public AvailableEgos?: Array<EgoBase>;
    public DeploymentSlot: number | undefined;

    constructor(sinnerEnum: SinnerEnum, equipedIdentity: IdentityBase, equipedEgos: Array<EgoBase>) {
        this.SinnerEnum = sinnerEnum;
        this._equipedIdentity = equipedIdentity;
        this.EquipedEgos = equipedEgos;
    }

    get EquipedIdentity(): IdentityBase {
        return this._equipedIdentity;
    }
    set EquipedIdentity(newIdentity: IdentityBase) {
        this._equipedIdentity = newIdentity;
        UpdateSinnerIdentityCard(this.SinnerEnum);
    }
}