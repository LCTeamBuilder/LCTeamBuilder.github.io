import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { YearningMircallaDonQuixoteAwakening } from "./YearningMircallaDonQuixoteAwakening";
import { YearningMircallaDonQuixoteCorrosion } from "./YearningMircallaDonQuixoteCorrosion";

export class YearningMircallaDonQuixote implements Ego{
    readonly Id: number = 20307;
    readonly Name: string = "Yearning Mircalla";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.WAW;
    readonly AwakeningSkill: Skill = new YearningMircallaDonQuixoteAwakening;
    readonly AwakeningSanityCost: number = 15;
    readonly CorrosionSkill?: Skill = new YearningMircallaDonQuixoteCorrosion;
    readonly CorrosionSanityCost?: number = 40;
    readonly Passive: Passive = new Passive("Spiring Crimson Blossom", PassiveTypeEnum.Ego, "Every time 10 [Bleed] damage occurs, heal 1 SP on self (10 per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 0.5},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 0.5},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 0.75},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 5 },{sin: SinEnum.Gluttony, amount: 3 },{sin: SinEnum.Pride, amount: 2 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/EGO/YearningMircalla/20307cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/DonQuixote/EGO/YearningMircalla/20307awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/DonQuixote/EGO/YearningMircalla/20307profilesummary.png";
}