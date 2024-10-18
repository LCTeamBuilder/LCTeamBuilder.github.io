import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { LanternGregorAwakening } from "./LanternGregorAwakening";
import { LanternGregorCorrosion } from "./LanternGregorCorrosion";

export class LanternGregor implements EgoBase{
    readonly Id: number = 21203;
    readonly Name: string = "Lantern";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new LanternGregorAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new LanternGregorCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Nutrient Absorption", PassiveTypeEnum.Ego, "After defeating an enemy that has [Rupture], heal HP by (Gluttony A-Reson.)% of Max HP.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 0.5},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 1 },{sin: SinEnum.Gluttony, amount: 4 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Gregor/EGO/Lantern/21203cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Gregor/EGO/Lantern/21203awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Gregor/EGO/Lantern/21203profilesummary.png";
}