import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { SolemnLamentGregorAwakening } from "./SolemnLamentGregorAwakening";
import { SolemnLamentGregorCorrosion } from "./SolemnLamentGregorCorrosion";

export class SolemnLamentGregor implements Ego{
    readonly Id: number = 21207;
    readonly Name: string = "Solemn Lament";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new SolemnLamentGregorAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new SolemnLamentGregorCorrosion;
    readonly CorrosionSanityCost?: number = 30;
    readonly Passive: Passive = new Passive("Lament", PassiveTypeEnum.Ego, "Turn End: if this unit has a negative effect, gain 1 [Attack Power Up] next turn<br>"+
        "When attacking targets that are either in Panic or in E.G.O Corrosion: deal +15% more damage");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 0.75},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 1 },{sin: SinEnum.Sloth, amount: 2 },{sin: SinEnum.Gloom, amount: 2 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Gregor/EGO/SolemnLament/21207cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Gregor/EGO/SolemnLament/21207awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Gregor/EGO/SolemnLament/21207profilesummary.png";
}