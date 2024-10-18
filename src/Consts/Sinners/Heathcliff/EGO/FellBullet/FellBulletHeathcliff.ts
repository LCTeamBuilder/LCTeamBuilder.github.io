import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { FellBulletHeathcliffAwakening } from "./FellBulletHeathcliffAwakening";
import { FellBulletHeathcliffCorrosion } from "./FellBulletHeathcliffCorrosion";

export class FellBulletHeathcliff implements EgoBase{
    readonly Id: number = 20707;
    readonly Name: string = "Fell Bullet";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new FellBulletHeathcliffAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new FellBulletHeathcliffCorrosion;
    readonly CorrosionSanityCost?: number = 25;
    readonly Passive: Passive = new Passive("Crushed Pendant", PassiveTypeEnum.Ego, "Combat Start: At 3+ highest Reson., gain 3 [Poise]");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.5},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 1 },{sin: SinEnum.Pride, amount: 3 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/EGO/FellBullet/20707cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Heathcliff/EGO/FellBullet/20707awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Heathcliff/EGO/FellBullet/20707profilesummary.png";
}