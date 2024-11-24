import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { LassoHongLuAwakening } from "./LassoHongLuAwakening";
import { LassoHongLuCorrosion } from "./LassoHongLuCorrosion";

export class LassoHongLu implements Ego{
    readonly Id: number = 20607;
    readonly Name: string = "Lasso";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new LassoHongLuAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new LassoHongLuCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Time to Hunt", PassiveTypeEnum.Ego, "If an enemy or an ally is killed due to [Rupture] or [Bleed] damage, inflict 2 [Lasso] against a random enemy, and gain 1 [Haste] next turn (once per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 0.5},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 1 },{sin: SinEnum.Gluttony, amount: 4 },{sin: SinEnum.Pride, amount: 1 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/HongLu/EGO/Snare/20607cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/HongLu/EGO/Snare/20607awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/HongLu/EGO/Snare/20607profilesummary.png";
}