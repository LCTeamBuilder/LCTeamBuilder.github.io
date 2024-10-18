import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { ContemptAweRyoshuAwakening } from "./ContemptAweRyoshuAwakening";
import { ContemptAweRyoshuCorrosion } from "./ContemptAweRyoshuCorrosion";

export class ContemptAweRyoshu implements EgoBase{
    readonly Id: number = 20407;
    readonly Name: string = "Contempt, Awe";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.WAW;
    readonly AwakeningSkill: Skill = new ContemptAweRyoshuAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new ContemptAweRyoshuCorrosion;
    readonly CorrosionSanityCost?: number = 40;
    readonly Passive: Passive = new Passive("Mark of the Gaze", PassiveTypeEnum.Ego, "Whenever this unit uses a base Attack Skill against an enemy, gain 1 additional E.G.O resource for a random, least-owned Affinity that doesn't correspond to the Affinity of the Attack Skill used");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.5},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 0.5},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 0.75},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 3 },{sin: SinEnum.Lust, amount: 4 },{sin: SinEnum.Pride, amount: 4 },{sin: SinEnum.Envy, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/EGO/ContemptAwe/20407cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Ryoshu/EGO/ContemptAwe/20407awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Ryoshu/EGO/ContemptAwe/20407profilesummary.png";
}