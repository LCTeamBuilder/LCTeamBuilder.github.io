import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { BlindObsessionRyoshuAwakening } from "./BlindObsessionRyoshuAwakening";
import { BlindObsessionRyoshuCorrosion } from "./BlindObsessionRyoshuCorrosion";

export class BlindObsessionRyoshu implements EgoBase{
    readonly Id: number = 20406;
    readonly Name: string = "Blind Obsession";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new BlindObsessionRyoshuAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new BlindObsessionRyoshuCorrosion;
    readonly CorrosionSanityCost?: number = 25;
    readonly Passive: Passive = new Passive("Dream Devouring", PassiveTypeEnum.Ego, "On Crit with a Pride affinity Skill, gain 1 [Poise] Count (3 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.5},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Gloom, amount: 2 },{sin: SinEnum.Pride, amount: 2 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/EGO/BlindObsession/20406cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Ryoshu/EGO/BlindObsession/20406awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Ryoshu/EGO/BlindObsession/20406profilesummary.png";
}