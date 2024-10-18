import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { BindsHeathcliffAwakening } from "./BindsHeathcliffAwakening";
import { BindsHeathcliffCorrosion } from "./BindsHeathcliffCorrosion";

export class BindsHeathcliff implements EgoBase{
    readonly Id: number = 20706;
    readonly Name: string = "Binds";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.WAW;
    readonly AwakeningSkill: Skill = new BindsHeathcliffAwakening;
    readonly AwakeningSanityCost: number = 10;
    readonly CorrosionSkill?: Skill = new BindsHeathcliffCorrosion;
    readonly CorrosionSanityCost?: number = 35;
    readonly Passive: Passive = new Passive("Chains of Binding", PassiveTypeEnum.Ego, "- Combat Start: At 4+ highest Reson. that includes this unit's Skills, apply 3 [Offense Level Up] and 3 [Defense Level Up] to self and all allies who were a part of the Reson.<br>"+
        "- If the said Reson. was an A-Reson., apply 2 additional [Offense Level Up] and [Defense Level Up]");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 0.5},
                                                                { sin: SinEnum.Pride, resistance: 0.5},
                                                                { sin: SinEnum.Envy, resistance: 0.75}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Gloom, amount: 4 },{sin: SinEnum.Pride, amount: 2 },{sin: SinEnum.Envy, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/EGO/Binds/20706cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Heathcliff/EGO/Binds/20706awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Heathcliff/EGO/Binds/20706profilesummary.png";
}