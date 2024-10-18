import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { SunshowerOutisAwakening } from "./SunshowerOutisAwakening";
import { SunshowerOutisCorrosion } from "./SunshowerOutisCorrosion";

export class SunshowerOutis implements EgoBase{
    readonly Id: number = 21104;
    readonly Name: string = "Sunshower";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new SunshowerOutisAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new SunshowerOutisCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Breath of the Hunt", PassiveTypeEnum.Ego, "After a clash, gain 2 [Poise]<br>"+
        "When staggered, gain 2 [Protection]; when recovering from stagger, gain 5 [Poise]");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 0.5},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 2 },{sin: SinEnum.Gluttony, amount: 2 },{sin: SinEnum.Gloom, amount: 1 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Outis/EGO/Sunshower/21104cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Outis/EGO/Sunshower/21104awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Outis/EGO/Sunshower/21104profilesummary.png";
}