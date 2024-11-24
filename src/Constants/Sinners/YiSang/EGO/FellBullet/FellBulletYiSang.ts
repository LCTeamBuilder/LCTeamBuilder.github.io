import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { FellBulletYiSangAwakening } from "./FellBulletYiSangAwakening";
import { FellBulletYiSangCorrosion } from "./FellBulletYiSangCorrosion";

export class FellBulletYiSang implements Ego{
    readonly Id: number = 20107;
    readonly Name: string = "Fell Bullet";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new FellBulletYiSangAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new FellBulletYiSangCorrosion;
    readonly CorrosionSanityCost?: number = 30;
    readonly Passive: Passive = new Passive("Next", PassiveTypeEnum.Ego, "After Attack: if the target is killed, gain +2 [Poise] Count (2 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 0.5},
                                                                { sin: SinEnum.Pride, resistance: 0.75},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 2 },{sin: SinEnum.Pride, amount: 6 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/YiSang/EGO/FellBullet/20107cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/YiSang/EGO/FellBullet/20107awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/YiSang/EGO/FellBullet/20107profilesummary.png";
}