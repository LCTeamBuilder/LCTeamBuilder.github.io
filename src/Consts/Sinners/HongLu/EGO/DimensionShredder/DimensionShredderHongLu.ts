import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { DimensionShredderHongLuAwakening } from "./DimensionShredderHongLuAwakening";
import { DimensionShredderHongLuCorrosion } from "./DimensionShredderHongLuCorrosion";

export class DimensionShredderHongLu implements EgoBase{
    readonly Id: number = 20603;
    readonly Name: string = "Dimension Shredder";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new DimensionShredderHongLuAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new DimensionShredderHongLuCorrosion;
    readonly CorrosionSanityCost?: number = 30;
    readonly Passive: Passive = new Passive("Entangled Phenomena Restoration", PassiveTypeEnum.Ego, "When hitting an enemy with negative status effects, this unit gains +1 [Charge] Count.<br>"+
        "(Max +4 per turn.)<br>When HP falls to 0 for the first time during battle, spend all [Charge] and heal in proportion to the amount spent. (Cannot heal over 25% Max HP.)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 0.75},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.5},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Gluttony, amount: 3 },{sin: SinEnum.Pride, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/HongLu/EGO/DimensionShredder/20603cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/HongLu/EGO/DimensionShredder/20603awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/HongLu/EGO/DimensionShredder/20603profilesummary.png";
}