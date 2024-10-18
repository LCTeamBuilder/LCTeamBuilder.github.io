import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { EverlastingFaustAwakening } from "./EverlastingFaustAwakening";
import { EverlastingFaustCorrosion } from "./EverlastingFaustCorrosion";

export class EverlastingFaust implements EgoBase{
    readonly Id: number = 20206;
    readonly Name: string = "Everlasting";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.WAW;
    readonly AwakeningSkill: Skill = new EverlastingFaustAwakening;
    readonly AwakeningSanityCost: number = 10;
    readonly CorrosionSkill?: Skill = new EverlastingFaustCorrosion;
    readonly CorrosionSanityCost?: number = 40;
    readonly Passive: Passive = new Passive("Running Time", PassiveTypeEnum.Ego, "When this unit uses a Skill to trigger [Tremor Burst] on an enemy, gain 1 [Haste] next turn. (4 times per turn, including E.G.O Skills)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.75},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 0.5},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.5},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Sloth, amount: 4 },{sin: SinEnum.Gloom, amount: 2 },{sin: SinEnum.Pride, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Faust/EGO/Everlasting/20206cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Faust/EGO/Everlasting/20206awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Faust/EGO/Everlasting/20206profilesummary.png";
}