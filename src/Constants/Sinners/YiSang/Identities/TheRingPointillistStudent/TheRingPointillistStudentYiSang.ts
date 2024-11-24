import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { TheRingPointillistStudentYiSangSkill1 } from "./TheRingPointillistStudentYiSangSkill1";
import { TheRingPointillistStudentYiSangSkill2 } from "./TheRingPointillistStudentYiSangSkill2";
import { TheRingPointillistStudentYiSangSkill3 } from "./TheRingPointillistStudentYiSangSkill3";
import { TheRingPointillistStudentYiSangDefense } from "./TheRingPointillistStudentYiSangDefense";

export class TheRingPointillistStudentYiSang implements Identity{
    readonly Id: number = 10109;
    readonly Name: string = "The Ring Pointillist Student";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 190;
    readonly HealthPerLevel: number = 2.4;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new TheRingPointillistStudentYiSangSkill1, 
                                new TheRingPointillistStudentYiSangSkill2, 
                                new TheRingPointillistStudentYiSangSkill3, 
                                new TheRingPointillistStudentYiSangDefense];
    readonly Passives: Passive[] = [
        new Passive("Sanguine Pointillist",
            PassiveTypeEnum.Combat,
            "This Identity only counts as an 'Identity that inflicts [Bleed]'. This Identity's Skills that randomly inflict [Burn], [Bleed], [Tremor], [Rupture], and [Sinking] do not count as Skills that inflict each respective Keyword."),

        new Passive("Assignment Evaluation",
            PassiveTypeEnum.Combat,
            "On Hit, if the target has 4+ [Bleed], heal 2 SP<br>"+
            "Heal 1 additional SP for every type of negative effect on the target. (max 3)<br>"+
            "If this unit's SP is at max, gain 2 [Offense Level Up] next turn when this unit heals SP with this effect.<br>"+
            "(This Passive activates 4 times max per turn)",
            [{sin: SinEnum.Lust , amount: 4}],
            PassiveCostTypeEnum.Owned),

        new Passive("Practices on Aesthetics",
            PassiveTypeEnum.Support,
            "1 ally with the least SP heals 2 SP On Hit for every type of negative effect on the target (max 6)<br>"+
            "If the target has [Bleed], heal 3 additional SP<br>"+
            "(This Passive activates 2 times max per turn)",
            [{sin: SinEnum.Lust, amount: 4}],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/YiSang/Identities/TheRingPointillistStudent/10109gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/YiSang/Identities/TheRingPointillistStudent/10109gacksunginfo.png";
}