import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { EffervescentCorrosionRodionAwakening } from "./EffervescentCorrosionRodionAwakening";
import { EffervescentCorrosionRodionCorrosion } from "./EffervescentCorrosionRodionCorrosion";

export class EffervescentCorrosionRodion implements EgoBase{
    readonly Id: number = 20904;
    readonly Name: string = "Effervescent Corrosion";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new EffervescentCorrosionRodionAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new EffervescentCorrosionRodionCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Sticky Filth", PassiveTypeEnum.Ego, "On Heads Hit with a Pierce Skill, inflict 1 [Bind] (2 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 0.5},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 2 },{sin: SinEnum.Gloom, amount: 2 },{sin: SinEnum.Pride, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Rodion/EGO/EffervescentCorrosion/20904cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Rodion/EGO/EffervescentCorrosion/20904awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Rodion/EGO/EffervescentCorrosion/20904profilesummary.png";
}