import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { YearningMircallaMeursaultAwakening } from "./YearningMircallaMeursaultAwakening";
import { YearningMircallaMeursaultCorrosion } from "./YearningMircallaMeursaultCorrosion";

export class YearningMircallaMeursault implements EgoBase{
    readonly Id: number = 20507;
    readonly Name: string = "Yearning Mircalla";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.WAW;
    readonly AwakeningSkill: Skill = new YearningMircallaMeursaultAwakening;
    readonly AwakeningSanityCost: number = 10;
    readonly CorrosionSkill?: Skill = new YearningMircallaMeursaultCorrosion;
    readonly CorrosionSanityCost?: number = 30;
    readonly Passive: Passive = new Passive("Bloodthirsty Banquet", PassiveTypeEnum.Ego, "When this unit deals or takes [Bleed] damage, heal HP equal to the [Bleed] damage (max 10 per turn)<br>"+
        "- When activating a Skill/Coin effect that inflicts [Bleed], if the target has [Rose Wedge], inflict 1 [Bleed] against the target. (2 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 0.5},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.75},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 4 },{sin: SinEnum.Pride, amount: 3 },{sin: SinEnum.Envy, amount: 4 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Meursault/EGO/YearningMircalla/20507cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Meursault/EGO/YearningMircalla/20507awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Meursault/EGO/YearningMircalla/20507profilesummary.png";
}