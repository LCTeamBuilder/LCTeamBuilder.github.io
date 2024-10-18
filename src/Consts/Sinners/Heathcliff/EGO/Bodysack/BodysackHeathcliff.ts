import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { BodysackHeathcliffAwakening } from "./BodysackHeathcliffAwakening";

export class BodysackHeathcliff implements EgoBase{
    readonly Id: number = 20701;
    readonly Name: string = "Bodysack";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new BodysackHeathcliffAwakening;
    readonly AwakeningSanityCost: number = 10;
    readonly CorrosionSkill?: Skill = undefined;
    readonly CorrosionSanityCost?: number = undefined;
    readonly Passive: Passive = new Passive("Vying Spirit", PassiveTypeEnum.Ego, "When another ally defeats an enemy, gain 1 [Attack Power Up] and 1 [Haste] at the start of the next turn. (Max 3)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 0.75}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 2},
                                                        {sin: SinEnum.Envy, amount: 2}];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/EGO/Bodysack/20701cg.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Heathcliff/EGO/Bodysack/20701profilesummary.png";
}