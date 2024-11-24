import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { CrowsEyeViewYisangAwakening } from "./CrowsEyeViewYiSangAwakening";

export class CrowsEyeViewYisang implements Ego{
    readonly Id: number = 20101;
    readonly Name: string = "Crow's Eye View";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new CrowsEyeViewYisangAwakening;
    readonly AwakeningSanityCost: number = 10;
    readonly CorrosionSkill?: Skill = undefined;
    readonly CorrosionSanityCost?: number = undefined;
    readonly Passive: Passive = new Passive("Silence", PassiveTypeEnum.Ego, "When hit by an attack, gain 3 [Bind] next turn, and deal +20% damage when attacking with a type or Affinity the target is Weak or Fatal to. (Once per turn.)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 0.75},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 1},
                                                          {sin: SinEnum.Sloth, amount: 3}];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/YiSang/EGO/CrowsEyeView/20101cg.png";
    readonly SummaryImageDir: string = "./assets/Sinners/YiSang/EGO/CrowsEyeView/20101profilesummary.png";

}