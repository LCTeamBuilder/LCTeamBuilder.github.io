import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { WingbeatIshmaelAwakening } from "./WingbeatIshmaelAwakening";
import { WingbeatIshmaelCorrosion } from "./WingbeatIshmaelCorrosion";

export class WingbeatIshmael implements EgoBase{
    readonly Id: number = 20806;
    readonly Name: string = "Wingbeat";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new WingbeatIshmaelAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new WingbeatIshmaelCorrosion;
    readonly CorrosionSanityCost?: number = 25;
    readonly Passive: Passive = new Passive("Gluttony", PassiveTypeEnum.Ego, "If the main target took HP damage this turn and isn't at max HP at Skill Use:<br>"+
        "On Hit,<br>"+
        "- When this unit is at max HP, deal +5~+10% more damage.<br>"+
        "- When this unit isn't at max HP, heal 2~5 HP.<br>"+
        "(7 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 0.75},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 0.5},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 1 },{sin: SinEnum.Gluttony, amount: 3 },{sin: SinEnum.Pride, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/EGO/Wingbeat/20806cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Ishmael/EGO/Wingbeat/20806awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Ishmael/EGO/Wingbeat/20806profilesummary.png";
}