import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { EffervescentCorrosionHongLuAwakening } from "./EffervescentCorrosionHongLuAwakening";
import { EffervescentCorrosionHongLuCorrosion } from "./EffervescentCorrosionHongLuCorrosion";

export class EffervescentCorrosionHongLu implements EgoBase{
    readonly Id: number = 20605;
    readonly Name: string = "Effervescent Corrosion";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new EffervescentCorrosionHongLuAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new EffervescentCorrosionHongLuCorrosion;
    readonly CorrosionSanityCost?: number = 25;
    readonly Passive: Passive = new Passive("Green Slime", PassiveTypeEnum.Ego, "If struck at less than 50% HP, inflict 1 [Rupture] on the attacker. (Activates (Highest Gluttony A-Reson) times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 0.5},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 0.75}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Gluttony, amount: 6 },{sin: SinEnum.Gloom, amount: 1 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/HongLu/EGO/EffervescentCorrosion/20605cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/HongLu/EGO/EffervescentCorrosion/20605awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/HongLu/EGO/EffervescentCorrosion/20605profilesummary.png";
}