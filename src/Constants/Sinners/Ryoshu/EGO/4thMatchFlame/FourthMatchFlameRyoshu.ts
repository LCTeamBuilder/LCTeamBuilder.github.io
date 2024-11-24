import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { FourthMatchFlameRyoshuAwakening } from "./FourthMatchFlameRyoshuAwakening";
import { FourthMatchFlameRyoshuCorrosion } from "./FourthMatchFlameRyoshuCorrosion";

export class FourthMatchFlameRyoshu implements Ego{
    readonly Id: number = 20402;
    readonly Name: string = "4th Match Flame";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new FourthMatchFlameRyoshuAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new FourthMatchFlameRyoshuCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("4th Match Flame", PassiveTypeEnum.Ego, "Every 4th skill used gains +4 Final Power and inflicts 4 [Burn] with each of its attacks.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.5},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 0.75}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 4 },{sin: SinEnum.Pride, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/EGO/4thMatchFlame/20402cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Ryoshu/EGO/4thMatchFlame/20402awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Ryoshu/EGO/4thMatchFlame/20402profilesummary.png";
}