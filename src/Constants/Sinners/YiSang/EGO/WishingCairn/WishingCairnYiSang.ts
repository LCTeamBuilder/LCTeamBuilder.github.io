import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { WishingCairnYiSangAwakening } from "./WishingCairnYiSangAwakening";
import { WishingCairnYiSangCorrosion } from "./WishingCairnYiSangCorrosion";

export class WishingCairnYiSang implements Ego{
    readonly Id: number = 20103;
    readonly Name: string = "Wishing Cairn";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new WishingCairnYiSangAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new WishingCairnYiSangCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Dol Hareubang", PassiveTypeEnum.Ego, "At the start of the turn, gain 3 [Blunt Protection] and [Sloth Protection].");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 0.5},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 4 },{sin: SinEnum.Gloom, amount: 1 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/YiSang/EGO/WishingCairn/20103cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/YiSang/EGO/WishingCairn/20103awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/YiSang/EGO/WishingCairn/20103profilesummary.png";
}