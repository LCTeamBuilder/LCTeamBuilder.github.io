import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { FourthMatchFlameYiSangAwakening } from "./FourthMatchFlameYiSangAwakening";
import { FourthMatchFlameYiSangCorrosion } from "./FourthMatchFlameYiSangCorrosion";

export class FourthMatchFlameYiSang implements Ego{
    readonly Id: number = 20102;
    readonly Name: string = "4th Match Flame";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new FourthMatchFlameYiSangAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new FourthMatchFlameYiSangCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Ember", PassiveTypeEnum.Ego, "On clash win, inflict [Burn] by (Wrath A-Reson. / 2). (Once per skill.)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.5},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 5 },{sin: SinEnum.Sloth, amount: 1 },{sin: SinEnum.Gluttony, amount: 1 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/YiSang/EGO/4thMatchFlame/20102cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/YiSang/EGO/4thMatchFlame/20102awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/YiSang/EGO/4thMatchFlame/20102profilesummary.png";
}