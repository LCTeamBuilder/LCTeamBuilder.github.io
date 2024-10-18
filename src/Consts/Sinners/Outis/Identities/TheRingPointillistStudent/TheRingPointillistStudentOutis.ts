import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { TheRingPointillistStudentOutisSkill1 } from "./TheRingPointillistStudentOutisSkill1";
import { TheRingPointillistStudentOutisSkill2 } from "./TheRingPointillistStudentOutisSkill2";
import { TheRingPointillistStudentOutisSkill3 } from "./TheRingPointillistStudentOutisSkill3";
import { TheRingPointillistStudentOutisDefense } from "./TheRingPointillistStudentOutisDefense";

export class TheRingPointillistStudentOutis implements IdentityBase{
    readonly Id: number = 11109;
    readonly Name: string = "The Ring Pointillist Student";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 69;
    readonly HealthPerLevel: number = 2.26;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new TheRingPointillistStudentOutisSkill1, 
                                new TheRingPointillistStudentOutisSkill2, 
                                new TheRingPointillistStudentOutisSkill3, 
                                new TheRingPointillistStudentOutisDefense];
    readonly Passives: Passive[] = [
        new Passive("Sanguine Pointillist",
            PassiveTypeEnum.Combat,
            "This Identity only counts as an 'Identity that inflicts [Bleed]'. This Identity's Skills that randomly inflict [Burn], [Bleed], [Tremor], [Rupture], and [Sinking] do not count as Skills that inflict each respective Keyword."),

        new Passive("Multitude of Dots",
            PassiveTypeEnum.Combat,
            "Combat Start: Inflict 2 Potency for 1 of the following effects on 2 enemies with the least types of negative effects: [Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Effect selected at random.<br>"+
            "(In Focused Encounters, Parts)",
            [{sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Rough Sketch",
            PassiveTypeEnum.Support,
            "1 ally with the least SP heals 4 SP when defeating an enemy with [Bleed].<br>"+
            "Heal 1 additional SP for every type of negative effect on the target. (Max 4. 3 times per turn)",
            [{sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Outis/Identities/TheRingPointillistStudent/11109gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Outis/Identities/TheRingPointillistStudent/11109gacksunginfo.png";
}