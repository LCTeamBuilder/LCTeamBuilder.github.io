import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { AEDDHeathcliffAwakening } from "./AEDDHeathcliffAwakening";
import { AEDDHeathcliffCorrosion } from "./AEDDHeathcliffCorrosion";

export class AEDDHeathcliff implements Ego{
    readonly Id: number = 20703;
    readonly Name: string = "AEDD";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new AEDDHeathcliffAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new AEDDHeathcliffCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Temperamental Discharge", PassiveTypeEnum.Ego, "When hit, spend 1 [Charge] Count to heal 2.5% of Max HP<br>"+
        "At less than 40% HP, gain 1 [Charge] Count before activating the healing effect. (Can gain up to 10 [Charge] Count per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.5},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Gloom, amount: 3 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/EGO/AEDD/20703cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Heathcliff/EGO/AEDD/20703awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Heathcliff/EGO/AEDD/20703profilesummary.png";
}