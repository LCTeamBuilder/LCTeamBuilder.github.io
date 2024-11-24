import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { ToPathosMathosOutisAwakening } from "./ToPathosMathosAwakening";

export class ToPathosMathosOutis implements Ego{
    readonly Id: number = 21101;
    readonly Name: string = "To Páthos Máthos";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new ToPathosMathosOutisAwakening;
    readonly AwakeningSanityCost: number = 10;
    readonly CorrosionSkill?: Skill = undefined;
    //readonly CorrosionSanityCost?: number = undefined;
    readonly Passive: Passive = new Passive("Tactical Perfection", PassiveTypeEnum.Ego, "If the unit did not get hit at all during a turn, gain 1 [Damage Up] next turn. (Max 3 stacks)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.75},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 2},
                                                        {sin: SinEnum.Pride, amount: 2}];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Outis/EGO/ToPathosMathos/21101cg.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Outis/EGO/ToPathosMathos/21101profilesummary.png";
}