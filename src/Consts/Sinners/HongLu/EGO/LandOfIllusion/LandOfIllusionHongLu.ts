import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { LandOfIllusionHongLuAwakening } from "./LandOfIllusionHongLuAwakening";

export class LandOfIllusionHongLu implements EgoBase{
    readonly Id: number = 20601;
    readonly Name: string = "Land of Illusion";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new LandOfIllusionHongLuAwakening;
    readonly AwakeningSanityCost: number = 15;
    readonly CorrosionSkill?: Skill = undefined;
    readonly CorrosionSanityCost?: number = undefined;
    readonly Passive: Passive = new Passive("Ripple", PassiveTypeEnum.Ego, "At the start of the combat phase, heal SP by the count of your highest A-Reson. value, excluding those in Panic.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 0.75},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 1},
                                                        {sin: SinEnum.Gloom, amount: 5}];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/HongLu/EGO/LandOfIllusion/20601cg.png";
    readonly SummaryImageDir: string = "./assets/Sinners/HongLu/EGO/LandOfIllusion/20601profilesummary.png";
}