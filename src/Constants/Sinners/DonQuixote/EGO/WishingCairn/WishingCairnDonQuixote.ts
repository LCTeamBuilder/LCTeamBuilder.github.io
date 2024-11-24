import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { WishingCairnDonQuixoteAwakening } from "./WishingCairnDonQuixoteAwakening";
import { WishingCairnDonQuixoteCorrosion } from "./WishingCairnDonQuixoteCorrosion";

export class WishingCairnDonQuixote implements Ego{
    readonly Id: number = 20305;
    readonly Name: string = "Wishing Cairn";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new WishingCairnDonQuixoteAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new WishingCairnDonQuixoteCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Fallen Stone Pagoda", PassiveTypeEnum.Ego, "Gain 2 [Poise] and +2 [Poise] Count when defeating an enemy with [Bleed] (3 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 0.5},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 2 },{sin: SinEnum.Sloth, amount: 2 },{sin: SinEnum.Pride, amount: 1 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/EGO/WishingCairn/20305cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/DonQuixote/EGO/WishingCairn/20305awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/DonQuixote/EGO/WishingCairn/20305profilesummary.png";
}