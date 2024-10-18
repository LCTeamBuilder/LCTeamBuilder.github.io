import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { BygoneDaysYiSangAwakening } from "./BygoneDaysYiSangAwakening";
import { BygoneDaysYiSangCorrosion } from "./BygoneDaysYiSangCorrosion";

export class BygoneDaysYiSang implements EgoBase{
    readonly Id: number = 20106;
    readonly Name: string = "Bygone Days";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new BygoneDaysYiSangAwakening;
    readonly AwakeningSanityCost: number = 15;
    readonly CorrosionSkill?: Skill = new BygoneDaysYiSangCorrosion;
    readonly CorrosionSanityCost?: number = 15;
    readonly Passive: Passive = new Passive("Fractured Yesterday", PassiveTypeEnum.Ego, 
                                            "If the target has 6+ [Sinking] Potency, Clash Power +1<br>"+
                                            "If the target has 4+ [Sinking] Count, Clash Power +1");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 0.75},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 3},
                                                        {sin: SinEnum.Gloom, amount: 3}];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/YiSang/EGO/BygoneDays/20106cg.png";
    readonly SummaryImageDir: string = "./assets/Sinners/YiSang/EGO/BygoneDays/20106profilesummary.png";
}