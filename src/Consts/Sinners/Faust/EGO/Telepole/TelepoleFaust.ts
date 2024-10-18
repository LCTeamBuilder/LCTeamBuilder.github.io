import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { TelepoleFaustAwakening } from "./TelepoleFaustAwakening";
import { TelepoleFaustCorrosion } from "./TelepoleFaustCorrosion";

export class TelepoleFaust implements EgoBase{
    readonly Id: number = 20204;
    readonly Name: string = "Telepole";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new TelepoleFaustAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new TelepoleFaustCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Adaptive Release", PassiveTypeEnum.Ego, "While this unit has [Charge], deal +2% damage per [Charge] Count.<br>"+
        "Skills spend -2 [Charge] Count.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.75},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 1 },{sin: SinEnum.Lust, amount: 3 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Faust/EGO/Telepole/20204cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Faust/EGO/Telepole/20204awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Faust/EGO/Telepole/20204profilesummary.png";
}