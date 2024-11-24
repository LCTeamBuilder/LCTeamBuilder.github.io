import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { RedEyesOpenRyoshuAwakening } from "./RedEyesOpenRyoshuAwakening";
import { RedEyesOpenRyoshuCorrosion } from "./RedEyesOpenRyoshuCorrosion";

export class RedEyesOpenRyoshu implements Ego{
    readonly Id: number = 20404;
    readonly Name: string = "Red Eyes (Open)";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new RedEyesOpenRyoshuAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new RedEyesOpenRyoshuCorrosion;
    readonly CorrosionSanityCost?: number = 25;
    readonly Passive: Passive = new Passive("Predator", PassiveTypeEnum.Ego, "If this unit healed more than 10% of its Max HP this turn, gain 1 [Attack Power Up] next turn.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 0.75},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 2 },{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Envy, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/EGO/RedEyesOpen/20404cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Ryoshu/EGO/RedEyesOpen/20404awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Ryoshu/EGO/RedEyesOpen/20404profilesummary.png";
}