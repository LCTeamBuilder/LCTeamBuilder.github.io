import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { AEDDGregorAwakening } from "./AEDDGregorAwakening";
import { AEDDGregorCorrosion } from "./AEDDGregorCorrosion";

export class AEDDGregor implements Ego{
    readonly Id: number = 21204;
    readonly Name: string = "AEDD";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new AEDDGregorAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new AEDDGregorCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Alternating Discharge", PassiveTypeEnum.Ego, "On hit with a Heads coin, spend 2 [Charge] Count to give +1 [Charge] Count to the Charge-possessing ally with the lowest [Charge] Count");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.5},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 0.75}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Gloom, amount: 3 },{sin: SinEnum.Envy, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Gregor/EGO/AEDD/21204cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Gregor/EGO/AEDD/21204awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Gregor/EGO/AEDD/21204profilesummary.png";
}