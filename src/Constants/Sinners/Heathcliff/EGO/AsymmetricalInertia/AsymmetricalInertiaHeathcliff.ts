import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { AsymmetricalInertiaHeathcliffAwakening } from "./AsymmetricalInertiaHeathcliffAwakening";
import { AsymmetricalInertiaHeathcliffCorrosion } from "./AsymmetricalInertiaHeathcliffCorrosion";

export class AsymmetricalInertiaHeathcliff implements Ego{
    readonly Id: number = 20708;
    readonly Name: string = "Asymmetrical Inertia";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new AsymmetricalInertiaHeathcliffAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new AsymmetricalInertiaHeathcliffCorrosion;
    readonly CorrosionSanityCost?: number = 30;
    readonly Passive: Passive = new Passive("Broken Bell", PassiveTypeEnum.Ego, "Inflict [Fragile] this turn on enemies who were hit by [Tremor Burst] from Skill, Coin, or Passive effects.<br>"+
        "- Does not stack with E.G.O Gifts that inflict [Fragile] upon triggering [Tremor Burst]. (If the said E.G.O Gifts have been enhanced, subtract this effect's value from the final value before inflicting it.)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                    { sin: SinEnum.Lust, resistance: 1},
                                                                    { sin: SinEnum.Sloth, resistance: 0.5},
                                                                    { sin: SinEnum.Gluttony, resistance: 1},
                                                                    { sin: SinEnum.Gloom, resistance: 2},
                                                                    { sin: SinEnum.Pride, resistance: 2},
                                                                    { sin: SinEnum.Envy, resistance: 0.75}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 2 },{sin: SinEnum.Gloom, amount: 1 },{sin: SinEnum.Pride, amount: 2 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/EGO/AsymmetricalInertia/20708cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Heathcliff/EGO/AsymmetricalInertia/20708awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Heathcliff/EGO/AsymmetricalInertia/20708profilesummary.png";
}