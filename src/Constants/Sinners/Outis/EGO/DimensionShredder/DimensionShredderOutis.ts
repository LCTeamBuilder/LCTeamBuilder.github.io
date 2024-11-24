import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { DimensionShredderOutisAwakening } from "./DimensionShredderOutisAwakening";
import { DimensionShredderOutisCorrosion } from "./DimensionShredderOutisCorrosion";

export class DimensionShredderOutis implements Ego{
    readonly Id: number = 21107;
    readonly Name: string = "Dimension Shredder";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new DimensionShredderOutisAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new DimensionShredderOutisCorrosion;
    readonly CorrosionSanityCost?: number = 30;
    readonly Passive: Passive = new Passive("Rambling Man", PassiveTypeEnum.Ego, "Max [Charge] Count +5<br>"+
        "Skills that consume [Charge] Count deal +2% more damage for every ([Charge] -1) (max 10%)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 0.75},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 1 },{sin: SinEnum.Gloom, amount: 3 },{sin: SinEnum.Pride, amount: 1 },{sin: SinEnum.Envy, amount: 4 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Outis/EGO/DimensionShredder/21107cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Outis/EGO/DimensionShredder/21107awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Outis/EGO/DimensionShredder/21107profilesummary.png";
}