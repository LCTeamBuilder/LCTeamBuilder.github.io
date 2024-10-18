import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { SunshowerYiSangAwakening } from "./SunshowerYiSangAwakening";
import { SunshowerYiSangCorrosion } from "./SunshowerYiSangCorrosion";

export class SunshowerYiSang implements EgoBase{
    readonly Id: number = 20105;
    readonly Name: string = "Sunshower";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.WAW;
    readonly AwakeningSkill: Skill = new SunshowerYiSangAwakening;
    readonly AwakeningSanityCost: number = 35;
    readonly CorrosionSkill?: Skill = new SunshowerYiSangCorrosion;
    readonly CorrosionSanityCost?: number = 35;
    readonly Passive: Passive = new Passive("Ray of Sun After Rain", PassiveTypeEnum.Ego, "At the start of the turn, all allies heal 3 SP");   
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                    { sin: SinEnum.Lust, resistance: 2},
                                                                    { sin: SinEnum.Sloth, resistance: 0.75},
                                                                    { sin: SinEnum.Gluttony, resistance: 0.5},
                                                                    { sin: SinEnum.Gloom, resistance: 1},
                                                                    { sin: SinEnum.Pride, resistance: 1},
                                                                    { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 4},
                                                        {sin: SinEnum.Gluttony, amount: 2},
                                                        {sin: SinEnum.Gloom, amount: 2},
                                                        {sin: SinEnum.Pride, amount: 2}];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/YiSang/EGO/Sunshower/20105cg.png";
    readonly SummaryImageDir: string = "./assets/Sinners/YiSang/EGO/Sunshower/20105profilesummary.png";
}