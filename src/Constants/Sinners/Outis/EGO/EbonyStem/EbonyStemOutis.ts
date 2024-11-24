import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { EbonyStemOutisAwakening } from "./EbonyStemOutisAwakening";
import { EbonyStemOutisCorrosion } from "./EbonyStemOutisCorrosion";

export class EbonyStemOutis implements Ego{
    readonly Id: number = 21102;
    readonly Name: string = "Ebony Stem";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new EbonyStemOutisAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new EbonyStemOutisCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Stem of Distrust", PassiveTypeEnum.Ego, "At the start of the turn, gain 1 [Pierce DMG Up]. On hit with a Heads coin, inflict 1 [Bind] and +1 [Rupture] Count next turn.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 0.5},
                                                                { sin: SinEnum.Gloom, resistance: 0.75},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Gluttony, amount: 3 },{sin: SinEnum.Gloom, amount: 1 },{sin: SinEnum.Pride, amount: 4 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Outis/EGO/EbonyStem/21102cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Outis/EGO/EbonyStem/21102awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Outis/EGO/EbonyStem/21102profilesummary.png";
}