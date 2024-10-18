import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { RegretMeursaultAwakening } from "./RegretMeursaultAwakening";
import { RegretMeursaultCorrosion } from "./RegretMeursaultCorrosion";

export class RegretMeursault implements EgoBase{
    readonly Id: number = 20505;
    readonly Name: string = "Regret";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new RegretMeursaultAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new RegretMeursaultCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Bound Wrath", PassiveTypeEnum.Ego, "This unit's leftmost skill on the Dashboard loses 1 Base Power and gains 2 Coin Power<br>"+
        "At the start of the turn, if at 4- Speed, gain 1 [Blunt Power Up]");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 0.5},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 3 },{sin: SinEnum.Pride, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Meursault/EGO/Regret/20505cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Meursault/EGO/Regret/20505awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Meursault/EGO/Regret/20505profilesummary.png";
}