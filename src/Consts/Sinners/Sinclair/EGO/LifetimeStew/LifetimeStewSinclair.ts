import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { LifetimeStewSinclairAwakening } from "./LifetimeStewSinclairAwakening";
import { LifetimeStewSinclairCorrosion } from "./LifetimeStewSinclairCorrosion";

export class LifetimeStewSinclair implements EgoBase{
    readonly Id: number = 21003;
    readonly Name: string = "Lifetime Stew";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new LifetimeStewSinclairAwakening;
    readonly AwakeningSanityCost: number = 15;
    readonly CorrosionSkill?: Skill = new LifetimeStewSinclairCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Stew Spewage", PassiveTypeEnum.Ego, "Tails Coins inflict 1 [Burn] if hitting an enemy.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 0.5},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 3 },{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Gluttony, amount: 1 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/EGO/LifetimeStew/21003cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Sinclair/EGO/LifetimeStew/21003awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Sinclair/EGO/LifetimeStew/21003profilesummary.png";
}