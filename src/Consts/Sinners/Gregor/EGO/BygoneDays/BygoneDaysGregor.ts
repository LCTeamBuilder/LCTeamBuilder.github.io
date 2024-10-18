import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { BygoneDaysGregorAwakening } from "./BygoneDaysGregorAwakening";
import { BygoneDaysGregorCorrosion } from "./BygoneDaysGregorCorrosion";

export class BygoneDaysGregor implements EgoBase{
    readonly Id: number = 21206;
    readonly Name: string = "Bygone Days";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new BygoneDaysGregorAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new BygoneDaysGregorCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("If I Could Go Back…", PassiveTypeEnum.Ego, "After Attack: If the target is defeated after this unit's attack, gain 1 E.G.O resource for the least-owned E.G.O resource.<br>"+
        "Gain 1 additional E.G.O resource for every 5 ([Sinking] Potency + Count) (max 3)<br>"+
        '(If there are 2 or more "least-owned E.G.O resource", select 1 of those Affinities at random to gain an E.G.O resource)');
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 0.5},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Gloom, amount: 4 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Gregor/EGO/BygoneDays/21206cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Gregor/EGO/BygoneDays/21206awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Gregor/EGO/BygoneDays/21206profilesummary.png";
}