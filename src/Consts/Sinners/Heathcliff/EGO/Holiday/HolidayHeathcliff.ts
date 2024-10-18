import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { HolidayHeathcliffAwakening } from "./HolidayHeathcliffAwakening";
import { HolidayHeathcliffCorrosion } from "./HolidayHeathcliffCorrosion";

export class HolidayHeathcliff implements EgoBase{
    readonly Id: number = 20705;
    readonly Name: string = "Holiday";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new HolidayHeathcliffAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new HolidayHeathcliffCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Infinite Hatred", PassiveTypeEnum.Ego, "When this unit has a status effect or a negative effect, and if the main target or the attacker has a positive effect:<br>"+
        "- Inflict +1 more [Burn], [Bleed], [Tremor], [Rupture], and [Sinking] Potency to self and enemies with Skill effects or Coin effects<br>"+
        "- Gain +1 more [Poise] and [Charge] Count with Skill effects or Coin effects");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 0.75},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Gluttony, amount: 3 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/EGO/Holiday/20705cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Heathcliff/EGO/Holiday/20705awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Heathcliff/EGO/Holiday/20705profilesummary.png";
}