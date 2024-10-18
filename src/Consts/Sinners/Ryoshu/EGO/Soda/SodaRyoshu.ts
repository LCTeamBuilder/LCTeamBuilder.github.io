import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { SodaRyoshuAwakening } from "./SodaRyoshuAwakening";
import { SodaRyoshuCorrosion } from "./SodaRyoshuCorrosion";

export class SodaRyoshu implements EgoBase{
    readonly Id: number = 20405;
    readonly Name: string = "Soda";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new SodaRyoshuAwakening;
    readonly AwakeningSanityCost: number = 15;
    readonly CorrosionSkill?: Skill = new SodaRyoshuCorrosion;
    readonly CorrosionSanityCost?: number = 15;
    readonly Passive: Passive = new Passive("Opened Can", PassiveTypeEnum.Ego, "On hit, if the target has 5+ [Sinking], inflict 1 [Defense Power Down]. (5 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 0.75},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Gluttony, amount: 2 },{sin: SinEnum.Pride, amount: 2 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/EGO/Soda/20405cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Ryoshu/EGO/Soda/20405awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Ryoshu/EGO/Soda/20405profilesummary.png";
}