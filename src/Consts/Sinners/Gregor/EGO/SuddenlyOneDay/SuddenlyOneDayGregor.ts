import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { SuddenlyOneDayGregorAwakening } from "./SuddenlyOneDayGregorAwakening";

export class SuddenlyOneDayGregor implements EgoBase{
    readonly Id: number = 21201;
    readonly Name: string = "Suddenly, One Day Gregor";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new SuddenlyOneDayGregorAwakening;
    readonly AwakeningSanityCost: number = 10;
    readonly CorrosionSkill?: Skill = undefined;
    readonly CorrosionSanityCost?: number = undefined;
    readonly Passive: Passive = new Passive("Uncontrolled Morph", PassiveTypeEnum.Ego, "At the start of the turn, if below 25% HP, heal 15 HP and gain 2 [Protection]. When this effect activates, inflict 1 random other ally & 1 random enemy with +2 [SP Loss Efficiency].");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 0.75},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 3},
                                                        {sin: SinEnum.Gloom, amount: 1}];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Gregor/EGO/SuddenlyOneDay/21201cg.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Gregor/EGO/SuddenlyOneDay/21201profilesummary.png";
}