import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { LaSangreDeSanchoDonQuixoteAwakening } from "./LaSangreDeSanchoDonQuixoteAwakening";

export class LaSangreDeSanchoDonQuixote implements Ego{
    readonly Id: number = 20301;
    readonly Name: string = "La Sangre de Sancho";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new LaSangreDeSanchoDonQuixoteAwakening;
    readonly AwakeningSanityCost: number = 10;
    readonly CorrosionSkill?: Skill = undefined;
    readonly CorrosionSanityCost?: number = undefined;
    readonly Passive: Passive = new Passive("Immoderate Passion", PassiveTypeEnum.Ego, "On hit, if the target had [Bleed], heal 3 HP.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 0.75},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 2},
                                                        {sin: SinEnum.Pride, amount: 2}];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/EGO/LaSangreDeSancho/20301cg.png";
    readonly SummaryImageDir: string = "./assets/Sinners/DonQuixote/EGO/LaSangreDeSancho/20301profilesummary.png";
}