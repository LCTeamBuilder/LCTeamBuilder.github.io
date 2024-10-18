import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { DimensionShredderYiSangAwakening } from "./DimensionShredderYiSangAwakening";
import { DimensionShredderYiSangCorrosion } from "./DimensionShredderYiSangCorrosion";

export class DimensionShredderYiSang implements EgoBase{
    readonly Id: number = 20104;
    readonly Name: string = "Dimension Shredder";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new DimensionShredderYiSangAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new DimensionShredderYiSangCorrosion;
    readonly CorrosionSanityCost?: number = 30;
    readonly Passive: Passive = new Passive("Rambling Man", PassiveTypeEnum.Ego, "At the start of the turn, if this unit took no damage last turn, gain +4 [Charge] Count. After successfully hitting an enemy with lower Speed, inflict +1 [Rupture] Count. (3 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 0.75},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.5},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 3 },{sin: SinEnum.Gluttony, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/YiSang/EGO/DimensionShredder/20104cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/YiSang/EGO/DimensionShredder/20104awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/YiSang/EGO/DimensionShredder/20104profilesummary.png";
}