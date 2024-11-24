import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { LegerdemainGregorAwakening } from "./LegerdemainGregorAwakening";
import { LegerdemainGregorCorrosion } from "./LegerdemainGregorCorrosion";

export class LegerdemainGregor implements Ego{
    readonly Id: number = 21202;
    readonly Name: string = "Legerdemain";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new LegerdemainGregorAwakening;
    readonly AwakeningSanityCost: number = 10;
    readonly CorrosionSkill?: Skill = new LegerdemainGregorCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Maggots", PassiveTypeEnum.Ego, "On hit, inflict 5 [Maggots] at a (Gluttony A-Reson. x8)% chance.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 0.75},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 1 },{sin: SinEnum.Gluttony, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Gregor/EGO/Legerdemain/21202cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Gregor/EGO/Legerdemain/21202awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Gregor/EGO/Legerdemain/21202profilesummary.png";
}