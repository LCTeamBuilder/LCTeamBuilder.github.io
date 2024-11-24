import { SinnerEnum } from "../Enums/SinnerEnum";
import { UpdateSinnerIdentityCard } from "../Handlers/UIHandler";
import { Ego } from "./Ego";
import { Identity } from "./Identity";

export class Sinner {
    public SinnerEnum: SinnerEnum;
    private _equipedIdentity: Identity;
    public EquipedEgos: Array<Ego>;
    public AvailableIds?: Array<Identity>;
    public AvailableEgos?: Array<Ego>;
    public DeploymentSlot: number | undefined;

    constructor(sinnerEnum: SinnerEnum, equipedIdentity: Identity, equipedEgos: Array<Ego>) {
        this.SinnerEnum = sinnerEnum;
        this._equipedIdentity = equipedIdentity;
        this.EquipedEgos = equipedEgos;
    }

    get EquipedIdentity(): Identity {
        return this._equipedIdentity;
    }
    set EquipedIdentity(newIdentity: Identity) {
        this._equipedIdentity = newIdentity;
        UpdateSinnerIdentityCard(this.SinnerEnum);
    }
}