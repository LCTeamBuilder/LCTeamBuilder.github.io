import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { ImpendingDaySinclairAwakening } from "./ImpendingDaySinclairAwakening";
import { ImpendingDaySinclairCorrosion } from "./ImpendingDaySinclairCorrosion";

export class ImpendingDaySinclair implements EgoBase{
    readonly Id: number = 21002;
    readonly Name: string = "Impending Day";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new ImpendingDaySinclairAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new ImpendingDaySinclairCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Live Offering", PassiveTypeEnum.Ego, "After defeating an enemy with an attack or counter skill, gain 5 E.G.O resources of that skill's Affinity.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.5},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 3 },{sin: SinEnum.Lust, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/EGO/ImpendingDay/21002cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Sinclair/EGO/ImpendingDay/21002awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Sinclair/EGO/ImpendingDay/21002profilesummary.png";
}