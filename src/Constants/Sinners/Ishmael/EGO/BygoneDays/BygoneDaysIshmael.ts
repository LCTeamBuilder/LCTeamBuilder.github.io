import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { BygoneDaysIshmaelAwakening } from "./BygoneDaysIshmaelAwakening";
import { BygoneDaysIshmaelCorrosion } from "./BygoneDaysIshmaelCorrosion";

export class BygoneDaysIshmael implements Ego{
    readonly Id: number = 20807;
    readonly Name: string = "Bygone Days";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new BygoneDaysIshmaelAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new BygoneDaysIshmaelCorrosion;
    readonly CorrosionSanityCost?: number = 30;
    readonly Passive: Passive = new Passive("Interloper Reception", PassiveTypeEnum.Ego, "If the target has [The Uninvited] or any of the Panic Type changing effects, Clash Power +1.<br>"+
        "On Hit against the said target, heal 1 ally with the least SP for 5 SP. (once per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 0.5},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Sloth, amount: 1 },{sin: SinEnum.Gloom, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/EGO/BygoneDays/20807cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Ishmael/EGO/BygoneDays/20807awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Ishmael/EGO/BygoneDays/20807profilesummary.png";
}