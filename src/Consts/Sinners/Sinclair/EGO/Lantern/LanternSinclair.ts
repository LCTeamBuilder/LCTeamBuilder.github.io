import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { LanternSinclairAwakening } from "./LanternSinclairAwakening";
import { LanternSinclairCorrosion } from "./LanternSinclairCorrosion";

export class LanternSinclair implements EgoBase{
    readonly Id: number = 21004;
    readonly Name: string = "Lantern";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new LanternSinclairAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new LanternSinclairCorrosion;
    readonly CorrosionSanityCost?: number = 30;
    readonly Passive: Passive = new Passive("Fairy Lure", PassiveTypeEnum.Ego, "After defeating an enemy that mainly targets this unit at the start of the combat phase, heal 3% of Max HP + (Gluttony A-Reson.)% of Max HP");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 0.5},
                                                                { sin: SinEnum.Gloom, resistance: 0.75},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 1 },{sin: SinEnum.Gluttony, amount: 4 },{sin: SinEnum.Pride, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/EGO/Lantern/21004cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Sinclair/EGO/Lantern/21004awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Sinclair/EGO/Lantern/21004profilesummary.png";
}