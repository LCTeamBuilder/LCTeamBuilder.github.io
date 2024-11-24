import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { RedEyesRyoshuAwakening } from "./RedEyesRyoshuAwakening";
import { RedEyesRyoshuCorrosion } from "./RedEyesRyoshuCorrosion";

export class RedEyesRyoshu implements Ego{
    readonly Id: number = 20403;
    readonly Name: string = "Red Eyes";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new RedEyesRyoshuAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new RedEyesRyoshuCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Spider's Webs", PassiveTypeEnum.Ego, "On clash win, inflict 1 [Bind] next turn. (3 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 0.75},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Gluttony, amount: 2 },{sin: SinEnum.Envy, amount: 1 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/EGO/RedEyes/20403cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Ryoshu/EGO/RedEyes/20403awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Ryoshu/EGO/RedEyes/20403profilesummary.png";
}