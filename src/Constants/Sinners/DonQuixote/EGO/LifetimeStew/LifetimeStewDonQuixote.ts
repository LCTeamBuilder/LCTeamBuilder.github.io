import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { LifetimeStewDonQuixoteAwakening } from "./LifetimeStewDonQuixoteAwakening";
import { LifetimeStewDonQuixoteCorrosion } from "./LifetimeStewDonQuixoteCorrosion";

export class LifetimeStewDonQuixote implements Ego{
    readonly Id: number = 20304;
    readonly Name: string = "Lifetime Stew";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new LifetimeStewDonQuixoteAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new LifetimeStewDonQuixoteCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Cauldron of Gorging", PassiveTypeEnum.Ego, "At the start of the turn, convert 2 random non-Lust E.G.O resources into 1 Lust resource.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 0.5},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 5 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/EGO/LifetimeStew/20304cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/DonQuixote/EGO/LifetimeStew/20304awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/DonQuixote/EGO/LifetimeStew/20304profilesummary.png";
}